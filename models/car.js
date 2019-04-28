const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema(
	{
		make: { type: String, lowercase: true, required: true },
		model: { type: String, lowercase: true, required: true },
		year: { type: Number, lowercase: true, required: true },
		docs: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Document',
				index: true,
			},
		],
	},
	{ timestamps: true },
);

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
