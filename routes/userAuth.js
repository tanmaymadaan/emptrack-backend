const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/login', function (req, res, next) {

    console.log(req.body);
    User.findOne({ companyCode: req.body.companyCode, userCode: req.body.userCode }, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result);
            res.send(result);
            User.findOneAndUpdate({ uid: res.uid}, { loginStatus:  true});
        }
    }).catch(next);
});

module.exports = router;