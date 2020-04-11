const express = require('express');
const router = express.Router();

const checkIn = require('../models/checkIn');
const user = require('../models/user');

router.post('/checkIn', function (req, res, next) {
  // console.log(req.body);
  // res.send(req.body);
  console.log(req.body);
  req.body.status = true;
  checkIn.create(req.body).then(result =>  {
    user.findOneAndUpdate({ uid: req.body.uid}, {currCheckIn: req.body.company, checkInStatus: 'true'}).then((result) => {
      res.send(pos);
    });
  }).catch(next);
  

  // console.log(req.params.id);
  // User.find({userId: req.params.id, status: true}).then(function(pos){
  //     res.send(pos);
  // }).catch(next);
});

router.post('/checkOut', (req, res, next) => {
  console.log(req.body.uid);
  console.log(req.body.remarks);
  checkIn.findOneAndUpdate({ uid: req.body.uid, status: true }, {status: false, checkoutTime: Date.now(), remarks: req.body.remarks}).then((result) => {
    res.send(result);
  }).catch(next);
  
});

module.exports = router;