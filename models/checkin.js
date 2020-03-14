const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const posSchema = new Schema({
    userId: {
        type: String
    },
    date: {
        type: Date
    },
    lat: {
        type: Number
    },
    lng: {
        type: Number
    },
    timestamp: {
        type: Number
    },
    company: {
        type: String
    }
}); 

const User = mongoose.model('checkin', posSchema);
module.exports = User;