
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
	email: String,
	surname: String,
	password: String
});

module.exports = mongoose.model('user', UserSchema );