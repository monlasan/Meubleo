const express = require('express');
const router = express.Router();
const { protect } = require('../../middleware/auth');
const { getAllUsers, getUser } = require('../../controllers/apis/users');

router.route('/').get(getAllUsers);
router.route('/:id').get(protect, getUser);

module.exports = router;
