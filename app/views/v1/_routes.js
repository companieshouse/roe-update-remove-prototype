const express = require('express')
const router = express.Router()

// content
router.post('/content', function(req, res) {
    res.redirect('address');
})

// address
router.post('/address', function(req, res) {
    res.redirect('check-your-answers');
})

// check-answers

// Add your routes here - above the module.exports line
module.exports = router
