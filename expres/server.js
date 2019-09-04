
const express =require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

//database

mongoose.connect('mongodb://127.0.0.1:27017/user-manager', { userNewUrlParser: true})
		.then( () => console.log('connected'))
		.catch(err => console.error(err)); 
		
//middleWare
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//controller 

const UserControl = require('./controllers/UserController'); 
const NoteControl = require('./controllers/NoteController'); 

//routes 

app.get('/saveu/:email/:surname/:password', UserControl.create);
app.get('/user', UserControl.retrieve);
app.get('/login/:p', UserControl.login);
app.get('/note/:p', NoteControl.find);
app.get('/note/create/:email/:note', NoteControl.create);

//Start server
app.listen(3000, () => console.log('listed on 3000'));



