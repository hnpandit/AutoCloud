const mongoose = require('mongoose');

const authUserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] 
    },
    password: {type: String, required: true}
});

module.exports = mongoose.model('AuthUser', authUserSchema);