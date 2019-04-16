const db = require("../models");

module.exports = {
  create: async body => {
    try {
      const dbDocument = await db.Document.create(body).then(data => data);
      return dbDocument;
    } catch (err) {
      return err;
    }
  },
  update: async (id, body) => {
    try {
      const dbDocument = await db.Document.findOneAndUpdate({ _id: id }, body).then(
        data => data
      );
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
  fetchByType: async type => {
    try {
      const dbDocument = await db.Document.find({ type }).then(data => data);
      return dbDocument;
    } catch (err) {
      return err;
    }
  }
};
