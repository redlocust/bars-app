var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

module.exports.locationsList = function (req, res) {
    Loc.find({}, (err, docs) => {
        console.log(docs);
        res.status(200);
        res.json(docs);
    });
};
