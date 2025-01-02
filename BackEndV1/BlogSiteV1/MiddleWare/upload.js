const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set up multer to store images in a directory, e.g., 'Public/uploads/profile_pics'
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, '../Public/uploads/profile_pics');
    // Check if the directory exists, if not create it
    fs.exists(dir, (exists) => {
      if (!exists) {
        fs.mkdir(dir, { recursive: true }, (err) => {
          if (err) {
            return cb(err, dir);
          }
          cb(null, dir);
        });
      } else {
        cb(null, dir);
      }
    });
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); // Unique name for each file
  }
});

// Filter to allow only image files
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
    cb(null, true);
  } else {
    cb(new Error('Only images are allowed (jpg, jpeg, png)'), false);
  }
};

// Initialize multer with the storage engine, file filter, and size limit (e.g., 2MB)
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 2 } // Limit file size to 2MB
}).single('profilePic'); // Expecting a single file input with the name 'profilePic'

module.exports = upload;
