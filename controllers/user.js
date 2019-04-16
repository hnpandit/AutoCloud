const db = require("../models");

module.exports = {
  create: async body => {
    try {
      const dbUser = await db.User.create(body).then(data => data);
      return dbUser;
    } catch (err) {
      return err;
    }
  },
  update: async (id, body) => {
    try {
      const dbUser = await db.User.findOneAndUpdate({ _id: id }, body).then(
        data => data
      );
      return dbUser;
    } catch (err) {
      return err;
    }
  },
  fetchAll: async query => {
    try {
      const dbUser = await db.User.find(query)
        .sort({
          userName: 1
        })
        .then(data => data);
      return dbUser;
    } catch (err) {
      return err;
    }
  },
  fetchByEmail: async email => {
    try {
      const dbUser = await db.User.find({ email }).then(data => data);
      return dbUser;
    } catch (err) {
      return err;
    }
  }
};
