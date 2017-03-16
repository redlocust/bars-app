var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

module.exports.locationsList = function (req, res) {
    Loc.find({}, (err, docs) => {
        res.status(200);
        res.json(docs);
    });
};

module.exports.locationsCreate = function (req, res) {
    Loc.create({
        name: req.body.name
    }, (err, doc) => {
        if (err) {
            res.status(400);
            res.json({error: 'error creating document'});
        } else {
            res.status(201);
            res.json(doc);
        }
    });
};

module.exports.locationsReadOne = function (req, res) {
    Loc.findOne({_id: req.params.locationid}, (err, doc) => {
        if (err) {
            res.status(400);
            res.json({error: 'error finding document'});
        } else {
            res.status(201);
            res.json(doc);
        }
    });
};

module.exports.locationsDeleteOne = function (req, res) {
    Loc.remove({_id: req.params.locationid}, (err, doc) => {
        if (err) {
            res.status(400);
            res.json({error: 'error deleting document'});
        } else {
            res.status(201);
            res.json(doc);
        }
    });
};

module.exports.locationsUpdateOne = function (req, res) {
    Loc.findOneAndUpdate({
            _id: req.params.locationid
        }, {
            $set: {
                name: req.body.name
            }
        }, {new: true},
        (err, doc) => {
            if (err) {
                res.status(400);
                res.json({error: 'error updating document'});
            } else {
                res.status(201);
                res.json(doc);
            }
        });
};
