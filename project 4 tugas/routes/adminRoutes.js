const express = require('express');
const router = express.Router();
const { getAdminPage } = require('../controllers/adminController');
const authAdmin = require('../middleware/authMiddleware');


router.get('/', authAdmin, getAdminPage);

module.exports = router;