const express = require('express');
const router =express.Router();
const profileController = require('../controller/profile-controller')


router.route('/add').post(profileController.addProfile);
router.route('/get-all-profiles').get(profileController.getAllProfile);
router.route('/get-profile/:id').get(profileController.profile);
router.route('/update-profile').put(profileController.updateProfile);
router.route('/delete-profile').delete(profileController.removeProfile);
module.exports = router;















