// Load required packages
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// Define our user schema
var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Execute before each user.save() call
UserSchema.pre('save', function (callback) {
    var user = this;

    // Break out if the password hasn't changed
    if(!user.isModified('password')) {
        return callback();
    }

    // Password changed so we need to hash it
    bcrypt.genSalt(5, function (err, salt) {
        if(err) {
            console.log(err);
            return callback(err);
        }

        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if(err) {
                console.log('could not create hash!');
                return callback(err);
            }
            user.password = hash;
            callback();
        });
    });
});

UserSchema.methods.verifyPassword = function (password, cb) {
    console.log('verifyPassword now.');
    bcrypt.compare(password, this.password, function (err, isMatch) {
        if(err) {
            console.log(err);
            return cb(err);
        }
        cb(null, isMatch);
    });
};

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);