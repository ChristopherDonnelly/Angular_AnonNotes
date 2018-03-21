const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes');

var NotesSchema = require('../models/notes_model');

const Notes = mongoose.model('Notes', NotesSchema);