const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/relationshipDemo')
	.then(() => {
		console.log('Connection Open');
	})
	.catch((error => console.log(error)));

const userSchema = new Schema({
	username: String,
	age: Number,
})

const tweetSchema = new Schema({
	text: String,
	likes: Number,
	user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
// 	const user = new User({ username: 'chickenfan99', age: 31 })
// 	// const user = await User.findOne({ username: 'chickenfan99' })
// 	// const tweet1 = new Tweet({ text: 'omg I love my Chicken Family', likes: 0})
// 	const tweet2 = new Tweet({ text: 'bock bock bock my chickens make noises', likes: 1239 })
// 	tweet2.user = user;

// 	user.save();
// 	tweet2.save()
// }

// makeTweets()

const findTweet = async () => {
	const t = await Tweet.find({}).populate('user');

	console.log(t);
}

findTweet();