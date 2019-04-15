const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const documentSchema = new Schema({
	type: { type: String, required: true, index: true },
	docId: { type: String, required: true },
	expirationDate: { type: Date, require: true },
	notificationDay: { type: Number, required: true },
}, { timestamps: true });

const Document = mongoose.model("Document", documentSchema);

module.exports = Document;
