const express = require('express');
const router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({    
    destination:(req,file,callback) => {  
        callback(null, 'uploads')
    },
    filename:(req,file, callback) => {
      callback(null, `store_${file.originalname}`);
    }
});

let upload = multer({storage:storage});


router.post('/', upload.single('file'), (req, res, next) => {
    
    try {
        let file = req.file.filename;
        console.log("File uploaded: ", file.name);  
    }
    catch(error){
        res.status(500).json({error});
    }
});

module.exports = router;