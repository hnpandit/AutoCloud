const db = require("../models");

module.exports = {
  create: async body => {
    try {
      const dbCar = await db.Car.create(body).then(data => data);
      return dbCar;
    } catch (err) {
      return err;
    }
  },
  update: async (id, body) => {
    try {
      const dbCar = await db.Car.findOneAndUpdate({ _id: id }, body).then(
        data => data
      );
      return dbCar;
    } catch (err) {
      return err;
    }
  },
  fetchAll: async query => {
    try {
      const dbCar = await db.Car.find(query)
        .sort({
            name: 1,
            module: 1
        })
        .then(data => data);
      return dbCar;
    } catch (err) {
      return err;
    }
  },
};
