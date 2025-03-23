import nodemailer from "nodemailer";
import 'dotenv/config'




const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
    },
});

export const sendEmail = async (to, subject, userName) => {
    const htmlTemplate = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Welcome Email</title>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; }
                .container { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 20px; border-radius: 5px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); }
                h1 { color: #333; }
                p { font-size: 16px; color: #666; }
                .footer { margin-top: 20px; font-size: 12px; color: #999; text-align: center; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome, ${userName}!</h1>
                <p>We're excited to have you join <strong>Notes</strong>. Start creating and organizing your notes easily.</p>
                <p>If you have any questions, feel free to reach out!</p>
                <p>Best regards, <br> The Notes Team</p>
                <div class="footer">
                    <p>&copy; 2025 Notes Inc. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
    `;

    const send = await transporter.sendMail({
        from: process.env.USER_EMAIL,
        to: to,
        subject: subject,
        html: htmlTemplate,
    });

    console.log('Email sent:', send);
};


// export const sendEmail = async (to, subject, text) => {
//     const send = await transporter.sendMail({
//         from: process.env.USER_EMAIL,
//         to: to,
//         subject: subject,
//         text: text,



//     });
//     console.log('email.sent', send)
// }