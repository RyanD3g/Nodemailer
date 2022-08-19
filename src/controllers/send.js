const nodemailer = require('nodemailer');

exports.sendmailer = async (req, res)=>{
    const send_mail = await nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth:{
            user: process.env.USER_MAIL,
            pass: process.env.PASS_MAIL,
            secure: true
        }
    });

    const mail = await send_mail.sendMail({
        from: 'Pedido realizado! <durma155@gmail.com>',
        to: process.env.TO_MAIL,
        subject:'Heeeey! Temos uma nova mensagem!',
        text: req.body.message
    });
    res.sendFile(path.resolve(__dirname, '..', 'views', 'sendSucess.html'));
};
