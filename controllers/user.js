const db = require('../models');

const addDays = async (days) => {
	const today = new Date(
		new Date().getFullYear(),
		new Date().getMonth(),
		new Date().getDate(),
	);
	const todayEpoch = new Date(today);
	todayEpoch.setDate(todayEpoch.getDate() + parseInt(days));
	const result = new Date(todayEpoch.setUTCHours(0, 0, 0, 0)).toISOString();
	return result;
};

module.exports = {
	create: async (body) => {
		try {
			const dbUser = await db.User.create(body).then((data) => data);
			return dbUser;
		} catch (err) {
			return err;
		}
	},
	updateById: async (id, body) => {
		try {
			const dbUser = await db.User.findOneAndUpdate({ _id: id }, body).then(
				(data) => data,
			);
			return dbUser;
		} catch (err) {
			return err;
		}
	},
	// Adding controller to push cars id into user
	pushCarsById: async (userId, carId) => {
		try {
			const dbUser = await db.User.findOneAndUpdate({ _id: userId }, {$push: {cars: carId}}).then(
				(data) => data,
			);
			return dbUser;
		} catch (err) {
			return err;
		}
	},

	fetchAll: async (query) => {
		try {
			const dbUser = await db.User.find(query)
				.sort({
					userName: 1,
				})
				.then((data) => data);
			return dbUser;
		} catch (err) {
			return err;
		}
	},
	fetchById: async (id) => {
		try {
			const dbUser = await db.User.findById(id)
				.populate({
					path: 'cars',
					model: 'Car',
					populate: {
						path: 'docs',
						model: 'Document',
					},
				})
				.then((data) => data);
			return dbUser;
		} catch (err) {
			return err;
		}
	},
	fetchByEmail: async (email) => {
		try {
			const dbUser = await db.User.find({ email })
				.populate({
					path: 'cars',
					model: 'Car',
					populate: {
						path: 'docs',
						model: 'Document',
					},
				})
				.then((data) => data);
			return dbUser;
		} catch (err) {
			return err;
		}
	},
	fetchByExpDate: async (days) => {
		try {
			const notifiableDate = await addDays(days);
			const dbUser = await db.User.find()
				.populate({
					path: 'cars',
					model: 'Car',
					populate: {
						path: 'docs',
						model: 'Document',
						match: { expirationDate: { $eq: notifiableDate } },
					},
				})
				.then((data) => data);
			return dbUser;
		} catch (err) {
			return err;
		}
	},
};
