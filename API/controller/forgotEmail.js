import nodemailer from 'nodemailer';

function sendForgotMailAPI(user_email,user_password){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sahurishita123@gmail.com',
          pass: 'xkckjurkmuxxtawv'
        }
      });
      
      var mailOptions = {
        from: 'sahurishita123@gmail.com',
        to: user_email,
        subject: 'Forgot Password Email : JobSeeker',
        html: "<h1>Wlecome to JobSeeker </h1><p>Your Old Password to Register Email is</p><h3>Username : "+user_email+"</h3> <h3>Password : "+user_password+"</h3>"
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      }); 
}

export default sendForgotMailAPI;