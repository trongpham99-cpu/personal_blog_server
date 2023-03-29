const express = require('express')
const router = express.Router()
const DefaultController = require('../../controllers/default/index');
const asyncHandler = require('../../helpers/asyncHandler')
// sign up
router.get('/', asyncHandler(DefaultController.call))

module.exports = router