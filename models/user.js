const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		email: { type: String, required: true, index: true, unique: true },
		phoneNumber: { type: String, required: true },
		cars: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Car',
				index: true,
			},
		],
	},
	{ timestamps: true },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
