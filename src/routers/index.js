const express = require('express')
const router = express.Router()

router.use('/', require('./default/index'))
router.use('/v1/api/post', require('./post/index'))

module.exports = router