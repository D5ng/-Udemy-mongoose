const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/relationshipDemo')
	.then(() => {
		console.log('Connection Open');
	})
	.catch((error => console.log(error)));

const userSchema = new mongoose.Schema({
	first: String,
	last: String,
	addresses: [
		{
			street: String,
			city: String,
			state: String,
			country: String,
		}
	]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
	const u = new User({
		first: 'Harry',
		last: 'Portter'
	})

	u.addresses.push({
		street: '123 sesame St.',
		city: 'New York',
		state: 'NY',
		country: 'USA'
	})

	const res = await u.save();
	console.log(res);
}


const addAdress = async (id) => {
	const user = await User.findById(id);

	user.addresses.push({
		street: '99 3rd St.',
		city: 'New York',
		state: 'NY',
		country: 'USA'
	})

	const res = await user.save();
	console.log(res);
}

// makeUser();
addAdress('63d90e13e5bc5cc6e5f673d4');