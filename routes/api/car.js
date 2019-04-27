// Dependencies
const carRouter = require("express").Router();
const carController = require("../../controllers/car");

// Car End-points
carRouter
  .get("/", (req, res, next) => {
    const query = {};
    if (req.query.name) {
      query.name = req.query.name;
    }
    if (req.query.model) {
      query.model = req.query.model;
    }
    if (req.query.year) {
      query.year = req.query.year;
    }
    carController
      .fetchAll(query)
      .then(data =>
        data.length < 1
          ? res.status(404).json({ message: `No Car Found` })
          : res.status(200).json(data)
      )
      .catch(err => res.status(500).next(err));
  })
  .post("/", (req, res, next) => {
    console.log('Route Hit')
    carController
      .create(req.body)
      .then(data => {
        console.log(data);
        data.length < 1
          ? res.status(404).json({ message: `No Car Found` })
          : res.status(201).json(data)
      }
      )
      .catch(err => res.status(500).next(err));
  })
  .get("/id/:carId", (req, res, next) => {
    carController
      .fetchById(req.params.carId)
      .then(data =>
        data.length < 1
          ? res.status(404).json({ message: `No Car Found` })
          : res.status(200).json(data)
      )
      .catch(err => res.status(500).next(err));
  })
  .put("/:carId", (req, res, next) => {
    carController
      .updateById(req.params.carId, req.body)
      .then(data =>
        data.length < 1
          ? res.status(404).json({ message: `No Car Found` })
          : res.status(200).json(data)
      )
      .catch(err => res.status(500).next(err));
  });

module.exports = carRouter;