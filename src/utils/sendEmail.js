import nodemailer from 'nodemailer'

async function sendEmail() {
  // Create a transporter object
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // SMTP server of your email provider
    port: 465, // Port (use 465 for secure, 587 for TLS)
    secure: true, // true for 465, false for 587
    auth: {
      user: 'testmailinator95@gmail.com', // Your email address
      pass: 'vfwe hvvp vtcn whck', // Your email password or app-specific password
    },
  });

  // Email options
  const mailOptions = {
    from: '"Your Name" testmailinator95@gmail.com', // Sender's address
    to: 'nyomanyudisdeveloper@gmail.com', // Receiver's address
    subject: 'Test Email from Node.js', // Subject line
    text: 'Hello! This is a test email sent from Node.js.', // Plain text body
    html: '<p>Hello! This is a <strong>test email</strong> sent from Node.js.</p>', // HTML body
  };

  try {
    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export default sendEmail
