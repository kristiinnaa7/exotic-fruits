// const express = require('express');
// const router = express.Router();
// const { authController } = require('../controllers');
// const { auth } = require('../utils');

// router.get('/profile', auth(),authController.getProfileInfo);
// router.put('/profile', auth(),authController.editProfileInfo);

// module.exports = router

const express = require('express');
const router = express.Router();
const { authController } = require('../controllers');
const { auth } = require('../utils');
const User = require('../models/userModel'); 


router.get('/', async (req, res) => {
  try {
    const users = await User.find(); 
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

router.get('/profile', auth(), authController.getProfileInfo);

router.put('/profile', auth(), authController.editProfileInfo);

module.exports = router;
