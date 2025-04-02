const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    photo: { type: String, required: true }, 
    description: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Profile', ProfileSchema);
