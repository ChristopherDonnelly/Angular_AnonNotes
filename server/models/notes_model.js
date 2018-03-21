const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    content:  { type: String, required: [true, "Note is required"], minlength: [3, "Note must be at least 3 characters long"] }
}, {timestamps: true });
