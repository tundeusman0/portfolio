const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendContactEmail = (name, email, details) => {
  sgMail.send({
    to: 'tundeusman0@gmail.com',
    from: email,
    subject: `Porfolio Message from, ${name}`,
    text: details
  });
};

module.exports = {
  sendContactEmail
};
