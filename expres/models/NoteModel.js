
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema ({
	email: String,
	note: String,
});

module.exports = mongoose.model('note', NoteSchema );