const db = require("../models");

module.exports = {
  /*
  create: async body => {
    try {
      const dbDocument = await db.Document.create(body).then(data => data);
      return dbDocument;
    } catch (err) {
      return err;
    }
  },
  */

  create: async (carId, body) => {
    try {
      const document = await new db.Document(body);
      const dbDocument = await document
        .save()
        .then(document => {
          console.log(carId);
          return db.Car.findById(carId).then(car => {
            car.docs.push(document);
            return car.save();
          });
        })
        .then(data => data);
      return dbDocument;
    } catch (err) {
      return err;
    }
  },
  updateById: async (id, body) => {
    try {
      const dbDocument = await db.Document.findOneAndUpdate(
        { _id: id },
        body
      ).then(data => data);
      return dbDocument;
    } catch (err) {
      return err;
    }
  },
  fetchAll: async query => {
    try {
      const dbDocument = await db.Document.find(query)
        .sort({
          name: 1,
          module: 1
        })
        .then(data => data);
      return dbDocument;
    } catch (err) {
      return err;
    }
  },
  fetchById: async id => {
    try {
      const dbDocument = await db.Document.findById(id).then(data => data);
      return dbDocument;
    } catch (err) {
      return err;
    }
  }
};
