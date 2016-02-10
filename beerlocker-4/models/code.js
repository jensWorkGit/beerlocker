// These are the codes generated in the first part of the OAuth2 flow.
// These codes are then used in later steps by getting exchanged for access tokens.
// link: http://scottksmith.com/blog/2014/07/02/beer-locker-building-a-restful-api-with-node-oauth2-server/

// authorization code should be hashed!!!!!!!!!!!!

// Load required packages
var mongoose = require('mongoose');

// Define our token schema
var CodeSchema = new mongoose.Schema({
    value: {type: String, required: true},
    redirectUri: {type: String, required: true},
    userId: {type: String, required: true},
    clientId: {type: String, required: true}
});

// Export the Mongoose model
module.exports = mongoose.model('Code', CodeSchema);