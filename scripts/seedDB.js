const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/autoCloud",
  //process.env.MONGODB_URI || "mongodb://heroku_8dt35cjz:bj4mlr99sdsadu140kikke4396@ds159204.mlab.com:59204/heroku_8dt35cjz",
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
      if (err) return err;

      const car1 = new db.Car({
        make: "Toyota",
        model: "Rav4",
        year: 2019,
        docs: result.map(doc => doc._id)
      });

      car1.save(function(err) {
        if (err) return err;

        const user1 = new db.User({
          firstName: "Auto",
          lastName: "Cloud",
          email: "rcbautocloud@gmail.com",
          phoneNumber: "911",
          cars: car1._id
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
        make: "Honda",
        model: "Accord",
        year: 2017,
        docs: result.map(doc => doc._id)
      });

      car2.save(function(err) {
        if (err) return err;

        const user2 = new db.User({
          firstName: "Himanshu",
          lastName: "Pandit",
          email: "himanshu.pandit@outlook.com",
          phoneNumber: "201-918-0080",
          cars: car2._id
        });

        user2.save(function(err) {
          if (err) return err;
        });
      });
    });
  })
  .then(() => {
    console.log("success!");
    //mongoose.disconnect();
    //process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
