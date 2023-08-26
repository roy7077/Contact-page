
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (request, response) => {

	response.sendFile(__dirname+"/index.html");
    console.log(__dirname);

});

app.post('/', (request, response) => {

        const name=request.body.name;
        const email=request.body.email;
        const text=request.body.message;
		console.log(email);
        const transporter = nodemailer.createTransport({
            service : 'Gmail',
            auth : {
                user : 'royraman532@gmail.com',
                pass : 'bhbmydhedmyjpgag'
            }
        });

			const mail_option = {
				from : request.body.email,
				to : 'royraman532@gmail.com',
				subject : 'Thanks for giving feedback',
				text : request.body.message
			};

			transporter.sendMail(mail_option, (error, info) => {
				if(error)
				{
					console.log(error);
				}
				else
				{
					response.redirect('/');
                    console.log("email sent")
				}
			});
		}
);


//start server
app.listen(3000, () => {

	console.log('Server started on port 3000');

});