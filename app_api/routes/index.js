var express = require('express');
var router = express.Router();

var ctrlLocations = require('../controllers/locations');

router.get('/', function (req, res) {
    res.send({message: 'Hello from API'});
});

router.get('/locations', ctrlLocations.locationsList);

module.exports = router;