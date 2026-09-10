import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const children = [];
let stopping = false;

function stop(code = 0) {
  if (stopping) return;
  stopping = true;
  process.exitCode = code;
  for (const child of children) child.kill('SIGTERM');
  const timer = setTimeout(() => {
    for (const child of children) child.kill('SIGKILL');
  }, 5000);
  timer.unref();
}

process.on('SIGINT', () => stop());
process.on('SIGTERM', () => stop());

for (const [name, directory, entry, args] of [
  ['Backend', 'backend', 'server.js', []],
  ['Frontend', 'web', 'node_modules/vite/bin/vite.js', ['--strictPort']],
]) {
  const child = spawn(process.execPath, [entry, ...args], {
    cwd: `${root}${directory}`,
    stdio: 'inherit',
    env: process.env,
  });
  children.push(child);
  child.on('error', (error) => {
    console.error(`${name} could not start: ${error.message}`);
    stop(1);
  });
  child.on('exit', (code, signal) => {
    if (!stopping) {
      console.error(`${name} stopped (${signal || code}); stopping both servers.`);
      stop(code || 1);
    }
  });
}
