const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/relationshipDemo')
	.then(() => {
		console.log('Connection Open');
	})
	.catch((error => console.log(error)));