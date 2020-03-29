const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    companyCode: {
        type: String
    },
    userCode: {
        type: Number
    },
    passCode: {
        type: Number
    }
});

const User = mongoose.model('user', userSchema);
module.exports = User;