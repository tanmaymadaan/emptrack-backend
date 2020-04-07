const express = require('express');
const router = express.Router();

const checkIn = require('../models/checkIn');
const user = require('../models/user');

router.post('/checkIn', function (req, res, next) {
  // console.log(req.body);
  // res.send(req.body);
  console.log(req.body);
  req.body.status = true;
  checkIn.create(req.body).then(function (pos) {
    res.send(pos);
  }).catch(next);
  user.findOneAndUpdate({ userId: req.body.id}, {currCheckIn: req.body.company, checkInStatus: 'true'}).then(function(pos) {
    res.send(pos);
  }).catch(next);

  // console.log(req.params.id);
  // User.find({userId: req.params.id, status: true}).then(function(pos){
  //     res.send(pos);
  // }).catch(next);
});

router.post('/checkOut', (req, res, next) => {
  console.log(req.body.id);
  console.log(req.body.remarks);
  checkIn.findOneAndUpdate({ userId: req.body.id, status: true }, {status: false, checkoutTime: Date.now(), remarks: req.body.remarks}).then(function (pos) {
    res.send(pos);
  }).catch(next);
  
});

module.exports = router;