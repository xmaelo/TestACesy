 
 const NoteModel = require('../models/NoteModel');

 module.exports = {
 	create: (req, res) => {
 		let note = new NoteModel({
 			email: req.params.email, 
 			note: req.params.note,
 		});

 		note.save()
 			.then(result => {
 				res.json({success: true, result: result });
 			})
 			.catch(err => {
 				res.json({ success: false, result: err});
 			});
 	},

 	retrieve: (req, res) => {
 		NoteModel.find()
 			.then(result => {
 				if(!result) res.json({success: false, result: "no data found"});
 				res.json({ success: true, result: result});
 			})
 			.catch(err => {
 				res.json({ success: false, result: err});
 			});
 	},
 	find: (req, res) => {
 		NoteModel.find( {email: req.params.p})
 			.then(result => {
 				res.json(result);
 			})
 			.catch(err => {
 				res.json({ success: false, result: err});
 			});
 	}
 }