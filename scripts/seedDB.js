// Dependencies
const mongoose = require("mongoose");
const db = require("../models");

//This file empties the Items & Users collections and inserts the items & users below

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/mern_todolist",
	{ useNewUrlParser: true }
);

const itemSeed = [
	{
		note: "Buy milk",
		author: "Nicole",
		date: new Date(Date.now())
	},
	{
		note: "Walk the dog",
		author: "Jim",
		date: new Date(Date.now())
	}
];

const userSeed = [
	{
		name: "Nicole",
		password: "test1"
	},
	{
		name: "Jim",
		password: "test2"
	}
];

db.Item.remove({})
	.then(() => db.Item.collection.insertMany(itemSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});

db.User.remove({})
	.then(() => db.User.collection.insertMany(userSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
