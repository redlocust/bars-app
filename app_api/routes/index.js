var express = require('express');
var router = express.Router();

var ctrlLocations = require('../controllers/locations');

router.get('/', function (req, res) {
    res.send({message: 'Hello from API'});
});

router.get('/locations', ctrlLocations.locationsList);
router.post('/locations', ctrlLocations.locationsCreate);
router.get('/locations/:locationid', ctrlLocations.locationsReadOne);
router.put('/locations/:locationid', ctrlLocations.locationsUpdateOne);
router.delete('/locations/:locationid', ctrlLocations.locationsDeleteOne);

module.exports = router;