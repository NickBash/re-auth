const nodemailer = require('nodemailer')

class MailService {

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: '',
			post: '',
			secure: false,
			auth: {

			}
		})
	}

	async sendActivationMail(to, link) {

	}
}

module.exports = new MailService()
