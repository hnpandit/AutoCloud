const nodemailer = require('nodemailer');
const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const password = process.env.cryptokey || 'secretPassword';
const encryptedPassword = '3e64a2c21dea8c7ac4a09b371bd1';

const transport = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: 'rcbautocloud@gmail.com',
		pass: decrypt(encryptedPassword),
	},
});

function sendEmail(to, subject, message) {
	const mailOptions = {
		from: 'rcbautocloud@gmail.com',
		to,
		subject,
		html: message,
	};
	transport.sendMail(mailOptions, (error) => {
		if (error) {
			console.log(error);
		}
	});
}

function encrypt(text) {
	const cipher = crypto.createCipher(algorithm, password);
	let crypted = cipher.update(text, 'utf8', 'hex');
	crypted += cipher.final('hex');
	return crypted;
}

function decrypt(text) {
	const decipher = crypto.createDecipher(algorithm, password);
	let dec = decipher.update(text, 'hex', 'utf8');
	dec += decipher.final('utf8');
	return dec;
}

exports.encrypt = encrypt;
exports.decrypt = decrypt;
exports.sendEmail = sendEmail;
