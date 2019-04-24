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
  updateById: async (id, body) => {
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
  fetchById: async id => {
    try {
      const dbUser = await db.User.findById(id)
        .populate({
          path: 'cars',
          model: 'Car',
          populate: {
            path: 'docs',
            model: 'Document'
          }
        })
        .then(data => data);
      return dbUser;
    } catch (err) {
      return err;
    }
  },
  fetchByEmail: async email => {
    try {
      const dbUser = await db.User.find({ email })
        .populate({
          path: 'cars',
          model: 'Car',
          populate: {
            path: 'docs',
            model: 'Document'
          }
        })
        .then(data => data);
      return dbUser;
    } catch (err) {
      return err;
    }
  }
};
