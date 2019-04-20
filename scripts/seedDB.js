const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/autoCloud",
  { useNewUrlParser: true }
);

const document = [
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
    db.Document.insertMany(document, function(err, result) {
      if (err) console.log(err);

      const car = new db.Car({
        name: "Toyota",
        model: "Rav4",
        year: 2019,
        doc: result.map(doc => doc._id)
      });

      car.save(function(err) {
        if (err) return handleError(err);

        const user = new db.User({
          firstName: "User",
          lastName: "1",
          userName: "User1",
          password: "12345",
          email: "User1@user.net",
          phoneNumber: "911",
          zipCode: "10001",
          car: car._id
        });

        user.save(function(err) {
          if (err) return err;
          //console.log(err);
        });
      });
    });
  })
  .then(() => {
    console.log("success!");
  })
  .catch(err => {
    console.error(err);
  });
