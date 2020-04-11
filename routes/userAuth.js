const express = require('express');
const router = express.Router();

const user = require('../models/user');

router.post('/login', function (req, res, next) {
    console.log(req.body);
    user.findOne({ companyCode: req.body.companyCode, userCode: req.body.userCode, passCode: req.body.passCode }, (err, result) => {
        if (err) {
            console.log("Error: ", err);
            res.send(err);
        }
        else {
            console.log("Result: ", result);
            if(result != null){
            res.send(result);
            user.findOneAndUpdate({ uid: result.uid }, { loginStatus: 'true' }).then((result2) => {
                console.log(result2);
            });
        }
        }
    }).catch(next);
});

router.post('/logout', (req, res, next) => {
    console.log(req.body);
    user.findOneAndUpdate({ uid: req.body.uid }, { loginStatus: 'false' }).then((result) => {
        res.send(result)
        console.log("Logout ", req.body.uid);
    });
});
// router.post('/logout', (req, res) => {
//     user.findOne
// });

module.exports = router;