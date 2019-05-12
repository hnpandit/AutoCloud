const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		firstName: { type: String, lowercase: true, required: true },
		lastName: { type: String, lowercase: true, required: true },
		email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], unique: true, index: true},
		phoneNumber: { type: Number, required: true },
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
