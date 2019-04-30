const db = require('../models');

module.exports = {
	create: async (userId, body) => {
		try {
			const car = await new db.Car(body);
			const dbCar = await car
				.save()
				.then((car) => {
					console.log(userId)
					return db.User.findById(userId).then((user) => {
						user.cars.push(car);
						return user.save();
					});
				})
				.then((data) => data);
			return dbCar;
		} catch (err) {
			return err;
		}
	},
	updateById: async (id, body) => {
		try {
			const dbCar = await db.Car.findOneAndUpdate({ _id: id }, body).then(
				(data) => data,
			);
			return dbCar;
		} catch (err) {
			return err;
		}
	},
	fetchAll: async (query) => {
		try {
			const dbCar = await db.Car.find(query)
				.sort({
					name: 1,
					module: 1,
				})
				.then((data) => data);
			return dbCar;
		} catch (err) {
			return err;
		}
	},
	fetchById: async (id) => {
		try {
			const dbCar = await db.Car.findById(id)
				.populate('docs')
				.then((data) => data);
			return dbCar;
		} catch (err) {
			return err;
		}
	},
};
