const express = require('express');
const router = express.Router();

const User = require('../models/checkIn');

router.post('/checkIn', function (req, res, next) {
  // console.log(req.body);
  // res.send(req.body);
  console.log(req.body);
  req.body.status = true;
  User.create(req.body).then(function (pos) {
    res.send(pos);
  }).catch(next);

  // console.log(req.params.id);
  // User.find({userId: req.params.id, status: true}).then(function(pos){
  //     res.send(pos);
  // }).catch(next);
});

router.get('/checkOut/:id', (req, res, next) => {
  console.log(req.params.id);
  User.findOneAndUpdate({ userId: req.params.id, status: true }, {status: false, checkoutTime: Date.now()}).then(function (pos) {
    res.send(pos);
  }).catch(next);
});

module.exports = router;