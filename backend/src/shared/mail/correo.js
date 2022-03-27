const nodemailer = require("nodemailer");
 const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'germanydevelop@gmail.com',//testAccount.user, // generated ethereal user
      pass: 'xtnrwjeovxxuuckm',//testAccount.pass, // generated ethereal password
    },
  });

  transporter.verify().then(()=>{
      console.log('Ready for send email');
  });

  function name(params) {
      
  }

  
module.exports = {transporter}