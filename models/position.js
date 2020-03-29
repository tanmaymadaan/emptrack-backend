const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const positionSchema = new Schema({
//     timestamp: Number,
//     lat: Number,
//     lng: Number
// });

// const dateSchema = new Schema({
//     date: Date,
//     pos: [positionSchema]
// });

// const UserSchema = new Schema({
//     UID: String,
//     dates: [dateSchema]
// });

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
    }
}); 

const User = mongoose.model('position', posSchema);
module.exports = User;