const express = require('express');
const router = express.Router();

const user = require('../models/user');

router.post('/swipe-in', (req, res) => {
    try {
        user.findOneAndUpdate({ uid: req.body.uid}, { swipeStatus: 'true'}).then((result) => {
            res.send(result);
        });
        
    } catch (err) {
        console.log(err);
    }
});

router.post('/swipe-out', (req, res) => {
    try {
        user.findOneAndUpdate({ uid: req.body.uid}, { swipeStatus: 'false' }).then((result) => {
            res.send(result);
        });
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;