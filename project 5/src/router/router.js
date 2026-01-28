const express = require('express');
const router = express.Router();
const basoController = require('../controller/basoController');
const userController = require('../controller/userController');
const auth = require('../middleware/auth');



router.get('/user',auth, userController.tampilUserdata);
router.get('/user/:id',auth, userController.tampilUserdataById);
router.post('/user/register', userController.tambahUserdata);
router.put('/user/:id',auth, userController.updateUserdata);
router.delete('/user/:id',auth, userController.hapusUserdata);


router.get('/',auth, basoController.tampilData);
router.post('/',auth, basoController.tambahData);
router.put('/:id',auth, basoController.updateData);
router.delete('/:id',auth, basoController.hapusData);



router.get('/:id',auth, basoController.tampilDataById);

module.exports = router;