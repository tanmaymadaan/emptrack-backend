const express = require('express');
const router = express.Router();

const User = require('../models/position');

router.post('/add-position', function (req, res, next) {
  // console.log(req.body);
  // res.send(req.body);
  console.log(req.body);
  User.create(req.body).then(function (pos) {
    res.send(pos);
  }).catch(next);

  // console.log(req.params.id);
  // User.find({userId: req.params.id, date: req.params.date}).then(function(pos){
  //     res.send(pos);
  // }).catch(next);
});

module.exports = router;