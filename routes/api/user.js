// Dependencies
const userRouter = require('express').Router();
const userController = require('../../controllers/user');
const sms = require('../../utils/sms');


// User End-points
userRouter
	.get('/', (req, res, next) => {
		const query = {};
		if (req.query.userName) {
			query.userName = req.query.userName;
		}
		if (req.query.email) {
			query.email = req.query.email;
		}
		if (req.query.phoneNumber) {
			query.phoneNumber = req.query.phoneNumber;
		}
		userController
			.fetchAll(query)
			.then((data) =>
				data.length < 1
					? res.status(404).json({ message: `No User Found` })
					: res.status(200).json(data),
			)
			.catch((err) => res.status(500).next(err));
	})
	.post('/', (req, res, next) => {
		userController
			.create(req.body)
			.then((data) =>
				data.length < 1
					? res.status(404).json({ message: `No User Found` })
					: res.status(201).json(data),
			)
			.catch((err) => res.status(500).next(err));
	})
	.get('/id/:userId', (req, res, next) => {
		userController
			.fetchById(req.params.userId)
			.then((data) =>
				data.length < 1
					? res.status(404).json({ message: `No User Found` })
					: res.status(200).json(data),
			)
			.catch((err) => res.status(500).next(err));
	})
	.get('/email/:email', (req, res, next) => {
		userController
			.fetchByEmail(req.params.email)
			.then((data) =>
				data.length < 1
					? res.status(404).json({ message: `No User Found` })
					: res.status(200).json(data),
			)
			.catch((err) => res.status(500).next(err));
	})
	.put('/:userId', (req, res, next) => {
		userController
			.updateById(req.params.userId, req.body)
			.then((data) =>
				data.length < 1
					? res.status(404).json({ message: `No User Found` })
					: res.status(200).json(data),
			)
			.catch((err) => res.status(500).next(err));
	})
	.get('/expdate/:days', (req, res, next) => {
		userController
			.fetchByExpDate(req.params.days)
			.then((data) =>
				data.length < 1
					? res.status(404).json({ message: `No User Found` })
					: (sms.sendSMS(data),
							res.status(200).json(data)),
			)
			.catch((err) => res.status(500).next(err));
	});

module.exports = userRouter;
