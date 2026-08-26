const nodemailer = require('nodemailer');

let transporter = null;

const getTransporter = async () => {
  if (transporter) return transporter;

  if (process.env.NODE_ENV === 'production') {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  } else {
    const { createTestAccount } = require('nodemailer');
    const testAccount = await createTestAccount();
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    console.log('📧 Dev email preview URL (Ethereal):', testAccount.web);
  }

  return transporter;
};

const sendEmail = async ({ to, subject, html }) => {
  try {
    const transport = await getTransporter();
    const info = await transport.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@heritagear.africa',
      to,
      subject,
      html,
    });
    console.log(`📧 Email sent: ${info.messageId}`);
    if (info.previewURL) {
      console.log(`   Preview: ${info.previewURL}`);
    }
    return info;
  } catch (error) {
    console.error('Email send failed:', error.message);
  }
};

module.exports = { sendEmail };
