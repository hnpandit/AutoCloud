const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstName: {type: String, required: true, index: true},
	lastName: {type: String, required: true, index: true},
	userName : { type: String, required: true, index: true, unique: true },
	password:  { type: String },
	email: { type: String, required: true, index: true, unique: true },
	phoneNumber: { type: String, required: true },
	zipCode: { type: String, required: true },
	car: [
		 {
			 type: Schema.Types.ObjectId,
			 ref: 'Car',
			 index: true
		 },
	 ],
 }, { timestamps: true });
 
 const User = mongoose.model("User", userSchema);

module.exports = User;
