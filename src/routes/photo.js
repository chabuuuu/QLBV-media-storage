const express = require('express');
const router = express.Router();
const itemsController = require('../app/controllers/ItemsController');
const multer  = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: (req , file, cb) => {
        cb(null, 'src/app/controllers/storage');
    },
    filename: (req, file, cb) => {
        console.log(file.mimetype);
        fileType = file.mimetype;
        console.log(fileType);
        var imagename = Date.now() + path.extname(file.originalname)
        req.imagename = imagename;
        cb(null, imagename);
    },
});
var upload = multer({
    storage: storage,
});
router.post('/item',upload.single('image') ,itemsController.store);
router.get('/item/:id', itemsController.get);

module.exports = router;
