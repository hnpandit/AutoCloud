const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
	//process.env.MONGODB_URI || 'mongodb://localhost:27017/autoCloud',
	process.env.MONGODB_URI ||'mongodb://heroku_8dt35cjz:bj4mlr99sdsadu140kikke4396@ds159204.mlab.com:59204/heroku_8dt35cjz',
	{ useNewUrlParser: true },
);

const document1 = [
	{
		_id: new mongoose.Types.ObjectId(),
		type: 'Insurance',
		docId: '98028271',
		expirationDate: new Date('2019-12-31'),
		notificationDay: 7,
	},
	{
		_id: new mongoose.Types.ObjectId(),
		type: 'Car Registration',
		docId: 'JKK 902',
		expirationDate: new Date('2019-06-30'),
		notificationDay: 14,
	},
];

const document2 = [
	{
		_id: new mongoose.Types.ObjectId(),
		type: 'Insurance',
		docId: '89766654',
		expirationDate: new Date('2019-05-02'),
		notificationDay: 7,
	},
	{
		_id: new mongoose.Types.ObjectId(),
		type: 'Vehicle Inspection',
		docId: 'SKJ 910',
		expirationDate: new Date('2019-05-12'),
		notificationDay: 14,
	},
];

const document3 = [
	{
		_id: new mongoose.Types.ObjectId(),
		type: 'Insurance',
		docId: '82918200',
		expirationDate: new Date('2019-05-31'),
		notificationDay: 7,
	},
	{
		_id: new mongoose.Types.ObjectId(),
		type: 'Registration',
		docId: 'VXY 029',
		expirationDate: new Date('2019-04-31'),
		notificationDay: 14,
	},
];

db.User.remove({})
	.then(() => db.Car.remove({}))
	.then(() => db.Document.remove({}))
	.then(() => {
		db.Document.insertMany(document1, function(err, result) {
			if (err) return err;

			const car1 = new db.Car({
				make: 'Toyota',
				model: 'Rav4',
				year: 2019,
				docs: result.map((doc) => doc._id),
			});

			car1.save(function(err) {
				if (err) throw err;

				const user1 = new db.User({
					firstName: 'Prashanth',
					lastName: 'Mijar',
					email: 'prashanth.mijar@gmail.com',
					phoneNumber: '6097755922',
					cars: car1._id,
				});

				user1.save(function(err) {
					if (err) return err;
				});
			});
		});
	})
	.then(() => {
		db.Document.insertMany(document2, function(err, result) {
			if (err) return err;

			const car2 = new db.Car({
				make: 'Honda',
				model: 'Accord',
				year: 2017,
				docs: result.map((doc) => doc._id),
			});
			car2.save(function(err) {
				if (err) return err;

				const user2 = new db.User({
					firstName: 'Himanshu',
					lastName: 'Pandit',
					email: 'hnpandit@gmail.com',
					phoneNumber: '2019180080',
					cars: car2._id,
				});

				user2.save(function(err) {
					if (err) return err;
				});
			});
		});
	})

	.then(() => {
		db.Document.insertMany(document3, function(err, result) {
			if (err) return err;

			const car3 = new db.Car({
				make: 'Mercedez',
				model: 'G 650',
				year: 2020,
				docs: result.map((doc) => doc._id),
			});
			car3.save(function(err) {
				if (err) return err;

				const user3 = new db.User({
					firstName: 'Jonathan',
					lastName: 'Palomino',
					email: 'jonp182015@gmail.com',
					phoneNumber: '7324230093',
					cars: car3._id,
				});

				user3.save(function(err) {
					if (err) return err;
				});
			});
		});
	})

	.then(() => {
		console.log('success!');
	})
	.catch((err) => {
		console.log("Error happend " + err);
		console.error(err);
		process.exit(1);
	});