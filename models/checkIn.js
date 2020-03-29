const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const posSchema = new Schema({
    userId: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
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
    },
    purpose: {
        type: String
    },  
    checkinTime: {
        type: Date,
        default : Date.now
    },
    checkoutTime: {
        type: Date,
    },
    status: {
        type: Boolean
    }
}); 

const User = mongoose.model('checkin', posSchema);
module.exports = User;