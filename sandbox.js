/// bycrypt
// let bcrypt = require('bcryptjs');
// let salt = bcrypt.genSaltSync(3);
// let hash = bcrypt.hashSync("konkon", salt);

// console.log(hash)

// console.log(bcrypt.compareSync("B4c0/\/", hash))
// console.log(bcrypt.compareSync("konkon", hash))


// nodemailer
let nodemailer = require('nodemailer');
const senderMail = "socialku69@yahoo.com";

const emailTransporter = nodemailer.createTransport({
            host: 'smtp.mail.yahoo.com',
            port: 465,
            service:'yahoo',
            secure: false,
            auth: {
               user: senderMail,
               pass: 'as12!@AS'
            },
            debug: false,
            logger: true   //<---highly recommend this one here
});

// let transporter = nodemailer.createTransport({
//  service: 'gmail',
//  auth: {
//         user: 'socialku69@gmail.com',
//         pass: 'as12!@AS'
//     }
// });
const mailOptions = {
  from: 'socialku69@yahoo.com', // sender address
  to: 'laksonosatriyo@gmail.com', // list of receivers
  subject: 'Subject of your email', // Subject line
  html: '<p>kelazzz</p>'// plain text body
};
emailTransporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});