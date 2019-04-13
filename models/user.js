// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
	userName : { type: String, required: true },
	password:  { type: String },
	email: { type: String, required: true },
	phoneNumber: { type: String, required: true },
	zipCode: { type: String, required: true },
	 car: [
		 {
			 type: Schema.Types.ObjectId,
			 ref: 'Car',
			 index: true
		 },
	 ],
 }, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });
 
 const User = mongoose.model("User", userSchema);

//Exporting
module.exports = User;
