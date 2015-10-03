var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// Users Register

router.get('/register', function(req, res, next) {
  res.render('register', {
  	'title': 'Register' 
  });
});

// Users Login

router.get('/login', function(req, res, next) {
  res.render('login', {
  	'title': 'Login' 
  });
});

router.post('/users/register', function(req, res, next) {
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;
});

// Check for image

if(req.files.profileimage){
	console.log('Uploading File...');

	// File Info 
	var profileImageOriginalName = req.files.profileimage.originalname;
	var profileImageName = req.files.profileimage.name;
	var profileImageMime = req.files.profileimage.mimetype;
	var profileImagePath = req.files.profileImage.path;
	var profileImageExt = req.files.profileimage.extension;
	var profileImageSize = req.files.profileimage.size;
} else {
	var profileImageName = 'noimage.png'
}

module.exports = router;
