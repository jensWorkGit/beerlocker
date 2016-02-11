// Load required packages
var Code = require('../models/code');

exports.getCodes = function (req, res) {
    Code.find(function (err, users) {
        if(err) {
            res.send(err);
        }

        res.json(users);
    });
};