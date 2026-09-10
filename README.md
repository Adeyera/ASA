# ASA-art

Run `npm run dev` from the project root or the `web` folder to start the frontend and backend together. Press Ctrl+C to stop both.

- Frontend: http://localhost:5173
- Backend: http://localhost:5050 (configured in `backend/.env`)

Install dependencies once with `npm install --prefix web` and `npm install --prefix backend`. Keep MongoDB running and configure `backend/.env` using `backend/.env.example` before starting.

To run only the frontend, use `npm run dev:frontend` from `web`. For HTTPS phone testing, use `VITE_HTTPS=1 npm run dev`.
