var mongoose = require('mongoose');


var locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});


mongoose.model('Location', locationSchema);