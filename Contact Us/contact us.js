// JavaScript Document

			function sendEmail()
		  {
				Email.send(
					{
						Host : "smtp.shackvine.com",
						Username : "yetaw60719@shackvine.com",
						Password : "YasasR#24",
						To : 'freeyasas03@gmail.com',
						From : document.getElementById("email").value,
						Subject : "new contact form enquiry",
						Body : "And this is the body"
					}).then(
					message => alert("message sent successfully")
				);
		   }