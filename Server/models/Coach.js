const mongoose = require('mongoose');

const CoachSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        require: true
    },
    description: {
        type: String,
        required: true
    },
    facebook: {
        type: String,
        required: false
    },
    instagram: {
        type: String,
        required: false
    },
})

module.exports = mongoose.model('coaches', CoachSchema);