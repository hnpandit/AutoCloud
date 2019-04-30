// Dependencies
const documentRouter = require('express').Router();
const documentController = require('../../controllers/document');

// Document End-points
documentRouter
	.get('/', (req, res, next) => {
		const query = {};
		if (req.query.type) {
			query.type = req.query.type;
		}
		documentController
			.fetchAll(query)
			.then((data) =>
				data.length < 1
					? res.status(404).json({ message: `No Document Found` })
					: res.status(200).json(data),
			)
			.catch((err) => res.status(500).next(err));
	})
	.post('/carId/:carId', (req, res, next) => {
		console.log(req.params.carId);
		documentController
			.create(req.params.carId, req.body)
			.then((data) =>
				data.length < 1
					? res.status(404).json({ message: `No Document Found` })
					: res.status(201).json(data),
			)
			.catch((err) => res.status(500).next(err));
	})
	.get('/id/:documentId', (req, res, next) => {
		documentController
			.fetchById(req.params.documentId)
			.then((data) =>
				data.length < 1
					? res.status(404).json({ message: `No Document Found` })
					: res.status(200).json(data),
			)
			.catch((err) => res.status(500).next(err));
	})
	.put('/:documentId', (req, res, next) => {
		documentController
			.updateById(req.params.documentId, req.body)
			.then((data) =>
				data.length < 1
					? res.status(404).json({ message: `No Document Found` })
					: res.status(200).json(data),
			)
			.catch((err) => res.status(500).next(err));
	});

module.exports = documentRouter;
