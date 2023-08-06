// Load required packages
var mongoose = require('mongoose');

// Define our user schema
var UserSchema = new mongoose.Schema({
    username:  {type: String, required: true},
    password: {type: String, required: true},
    favorites: {type: Array, default: []},
    locations: {type: Array, default: []},
    dateCreated: {type:Date, default: Date.now}
})


// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);
