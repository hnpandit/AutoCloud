const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  //process.env.MONGODB_URI || "mongodb://localhost:27017/autoCloud",
  process.env.MONGODB_URI || "mongodb://heroku_8dt35cjz:bj4mlr99sdsadu140kikke4396@ds159204.mlab.com:59204/heroku_8dt35cjz",
  { useNewUrlParser: true }
);

const document1 = [
  {
    _id: new mongoose.Types.ObjectId(),
    type: "Insurance",
    docId: "12345",
    expirationDate: new Date("2019-05-31"),
    notificationDay: 7
  },
  {
    _id: new mongoose.Types.ObjectId(),
    type: "Registration",
    docId: "ABCDEF",
    expirationDate: new Date("2019-04-31"),
    notificationDay: 14
  }
];

const document2 = [
  {
    _id: new mongoose.Types.ObjectId(),
    type: "Insurance",
    docId: "12345",
    expirationDate: new Date("2019-05-31"),
    notificationDay: 7
  },
  {
    _id: new mongoose.Types.ObjectId(),
    type: "Registration",
    docId: "ABCDEF",
    expirationDate: new Date("2019-04-31"),
    notificationDay: 14
  }
];

db.User.remove({})
  .then(() => db.Car.remove({}))
  .then(() => db.Document.remove({}))
  .then(() => {
    db.Document.insertMany(document1, function(err, result) {
      if (err) console.log(err);

      const car = new db.Car({
        carMake: "Toyota",
        model: "Rav4",
        year: 2019,
        docs: result.map(doc => doc._id)
      });

      car.save(function(err) {
        if (err) return handleError(err);

        const user = new db.User({
          firstName: "Auto",
          lastName: "Cloud",
          userName: "AutoCloud",
          password: "12345",
          email: "rcbautocloud@gmail.com",
          phoneNumber: "911",
          zipCode: "10001",
          cars: car._id
        });

        user.save(function(err) {
          if (err) return err;
          //console.log(err);
        }); // user.save
      }); // car.save
    }); // insertMany


    db.Document.insertMany(document2, function(err, result) {
      if (err) console.log(err);

      const car2 = new db.Car({
        name: "Honda",
        model: "Accord",
        year: 2017,
        docs: result.map(doc => doc._id)
      });

      car2.save(function(err) {
        if (err) return handleError(err);

        const user2 = new db.User({
          firstName: "Himanshu",
          lastName: "Pandit",
          userName: "hpandit",
          password: "test123",
          email: "himanshu.pandit@outlook.com",
          phoneNumber: "201-918-0080",
          zipCode: "08816",
          cars: car2._id
        });

        user2.save(function(err) {
          if (err) return err;
          //console.log(err);
        }); // user.save
      }); // car.save
    }); // insertMany

  }) //db.remove
  .then(() => {
    console.log("success!");
  })
  .catch(err => {
    console.error(err);
  });

  //process.exit();