const express = require('express');
const router = express.Router();

const user = require('../models/user');

router.get('/get-users/:id', function(req, res, next){
    console.log("GET USERS:")
    console.log(req.params.id);
    user.find({ manager: req.params.id }).then(function(users){
        res.send(users);
    })
});

module.exports = router;