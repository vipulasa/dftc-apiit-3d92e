const functions = require("firebase-functions");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendContactMailTrap = functions.https.onCall((data, context) => {
  // functions.logger.info("Hello logs!", {structuredData: true});
  // response.send("Hello DFTC APIIT!");

  const nodemailer = require("nodemailer");
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f35dda427f3e72",
      pass: "3ba77f94c543b5",
    },
  });

  const mailOptions = {
    from: data.email,
    to: "test@test.com",
    subject: "New Message from " + data.name,
    html: `<h1>${data.name}</h1><p>${data.message}</p>`,
  };

  transport.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});
