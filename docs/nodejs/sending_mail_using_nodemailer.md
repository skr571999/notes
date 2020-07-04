# Sending Mail

- Using nodemailer

```js
// npm i nodemailer
const nodemailer = require("nodemailer");

const SENDER_MAIL = "AAAAAA@gmail.com";
const RECEIVER_MAIL = "BBBBBB@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: SENDER_MAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});

transporter
  .sendMail({
    from: SENDER_MAIL,
    to: RECEIVER_MAIL,
    subject: "Friday Sale",
    text: "Apple iPhone X 11 pro Sale",
    html: "<h1>Apple iPhone X 11 pro Sale</h1>"
  })
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

// //  Setting the ENVIRONMENT VARIABLES
// set EMAIL_PASSWORD=1234
// echo %EMAIL_PASSWORD%
// // getting Environment Variables using nodeJS
process.env.VERIABLE_NAME;
```

<!--
- Sending HTML Mail From an file
- Using SanGrid
-->

## User Verification through Email

- User Identity Verification Need
  - Through Verification we can ensure that the email is valid and that email belongs to that user
- Process of User(user's email) Verification using Email Link
  - We will generate a random string and save that string to the databse with the user model
  - After creating the string we will send a verification email to the user in which we will send him a link(in link there will be user emial and the string)
  - For the link which we have sended to the user we need to make a route for handle that mail click
  - When the user click to the link we have sended in the mail our route will handle it
  - In handling the route
    - we will recieve the string through the url parameter and will match that string with the string we have stored in the database for that user
    - if both matches then we will set status verified for that user
- Process of User(user's email) Verification using Email OTP
