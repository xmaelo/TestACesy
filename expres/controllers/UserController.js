 
 const UserModel = require('../models/UserModel');

 module.exports = {
 	create: (req, res) => {
 		let user = new UserModel({
 			email: req.params.email,
			surname: req.params.surname,
			password: req.params.password
 		});

 		user.save()
 			.then(result => {
 				res.json({success: true, result: result });
 			})
 			.catch(err => {
 				res.json({ success: false, result: err});
 			});
 	},

 	retrieve: (req, res) => {
 		UserModel.find()
 			.then(result => {
 				if(!result) res.json({success: false, result: "no data found"});
 				res.json({ success: true, result: result});
 			})
 			.catch(err => {
 				res.json({ success: false, result: err});
 			});
 	},
 	login: (req, res) => {
 		UserModel.findOne( {email: req.params.p})
 			.then(result => {
 				if(!result.password) res.json({success: false, result: "no data found"});
 				res.json({success: true});
 			})
 			.catch(err => {
 				res.json({ success: false, result: err});
 			});
 	}
 }