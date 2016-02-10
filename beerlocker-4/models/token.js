// Access tokens are the final step in the OAuth2 process.
// With an access token, an application client is able to make a request on behalf of the user.
// The value field will be of the most interest here.
// It is the actual token value used when accessing the API on behalf of the user.
// The userId and clientId fields are used to know what user and application client own this token.

// Load required packages
var mongoose = require('mongoose');

// Define our token schema
var TokenSchema = new mongoose.Schema({
    value: {type: String, required: true},
    userId: {type: String, required: true},
    clientId: {type: String, required: true}
});

// Export the Mongoose model
module.exports = mongoose.model('Token', TokenSchema);