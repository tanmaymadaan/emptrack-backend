const express = require('express');
const multer = require('multer')
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');

const router = express.Router();

let storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb) {
      return crypto.pseudoRandomBytes(16, function(err, raw) {
        if (err) {
          return cb(err);
        }
        return cb(null, "" + (raw.toString('hex')) + (path.extname(file.originalname)));
      });
    }
  });

router.post("/upload", multer({
    storage: storage
  }).single('upload'), function(req, res) {
    console.log("111");
    console.log(req.file);
    console.log("222");
    console.log(req.body);
    //res.redirect("/uploads/" + req.file.filename);
    console.log("333");
    console.log(req.file.filename);
    return res.status(200).send(req.file.filename).end();
  });

module.exports = router;