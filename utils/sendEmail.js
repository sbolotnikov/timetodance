const nodemailer = require('nodemailer');
// const { google } = require('googleapis');

// const oAuth2Client = new google.auth.OAuth2(
//   process.env.CLIENT_ID_MAIL,
//   process.env.CLIENT_SECRET_MAIL,
//   process.env.REDIRECT_URI
// );
// oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

export const sendEmail=async(mailData) =>{
    try {
        // const accessToken = await oAuth2Client.getAccessToken();
    
        const transporter = nodemailer.createTransport(
        //   {
        //   service: 'gmail',
        //   auth: {
        //     type: 'OAuth2',
        //     user: process.env.EMAIL_SERVER_USER,
        //     clientId: process.env.CLIENT_ID_MAIL,
        //     clientSecret: process.env.CLIENT_SECRET_MAIL,
        //     refreshToken: process.env.REFRESH_TOKEN,
        //     accessToken: accessToken,
        //   },
        // }
        {
          host: process.env.EMAIL_SERVER_HOST,
          port: process.env.EMAIL_SERVER_PORT,
          secure: true, // true for 465, false for other ports
          auth: {
            user: process.env.EMAIL_SERVER_USER, // generated ethereal user
            pass: process.env.EMAIL_SERVER_PASSWORD, // generated ethereal password
          },
        }
        );

    const result = await transporter.sendMail(mailData);
    return result;
} catch (error) {
  return error;
}
  }
  
