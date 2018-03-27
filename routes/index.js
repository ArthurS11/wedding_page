/**
 * Created by Jora Khachatran on 6/25/2017.
 */
const express=require('express');
const nodemailer=require('nodemailer');
const hbs=require('express-handlebars');
const router=express.Router();
const config=require("../model/user");

router.get('/',(req,res)=>{
    res.render('weddpage');
});
router.get('/weddpage',(req,res)=>{
    res.render('weddpage');
});

router.post('/weddpage',(req,res)=>{
    console.log(req.body.Name+"  "+req.body.Email+"  "+req.body.Message);

    let weddData={
        Name:req.body.Name,
        Email:req.body.Email,
        Message:req.body.Message
    };
    config.create(weddData,(err,success)=>{
        if(err) return console.error(err.stack);
        console.log("Dropped in Database"+"\n"+success);
    });
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service:"Gmail",
        auth: {
            user: 'doejohnny1994@gmail.com',
            pass: 'As147852'
        }
    });

// setup email data with unicode symbols
    let mailOptions = {
        from: '"Jane & John"<doejohnny1994@gmail.com>', // sender address
        to: req.body.Email, // list of receivers
        subject: 'Invation ✔', // Subject line
        // text: "barev dzez", // plain text body
        html: "Dear "+req.body.Name+" you're invited to our Event. \n Thanks for RSPV " +
        "\n with great pleasure  <b>Jane & John Doe</b>."// html body
    };

// send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    res.render('weddpage');
});

module.exports=router;

