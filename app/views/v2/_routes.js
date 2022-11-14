const express = require('express');
const { countBy } = require('lodash');
const router = express.Router()

// index
router.post('/index', function(req, res) {

    // Reset all session variables to null (ordered page-by-page)

    // what-is-your-name
    req.session.data['fullname'] = null;

    // what-is-your-date-of-birth
    req.session.data['date-of-birth-day'] = null;
    req.session.data['date-of-birth-month'] = null;
    req.session.data['date-of-birth-year'] = null;

    // what-is-your-address
    req.session.data['address-line-1'] = null;
    req.session.data['address-line-2'] = null;
    req.session.data['address-town'] = null;
    req.session.data['address-county'] = null;
    req.session.data['address-postcode'] = null;

    // contact-details
    req.session.data['telephone-number'] = null;
    req.session.data['email'] = null;

    res.redirect('content');
})

// content
router.post('/content', function(req, res) {
    res.redirect('what-is-your-name');
})

// what-is-your-name
router.post('/what-is-your-name', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        res.redirect('check-your-answers');
    } else {
        res.redirect('what-is-your-date-of-birth');
    }
})

// what-is-your-date-of-birth
router.post('/what-is-your-date-of-birth', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        res.redirect('check-your-answers');
    } else {
        res.redirect('what-is-your-address');
    }
})

// what-is-your-address
router.post('/what-is-your-address', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        res.redirect('check-your-answers');
    } else {
        res.redirect('contact-details');
    }
})

// contact-details
router.post('/contact-details', function(req, res) {
    if ((req.session.data.gPreviousLocation).includes('check-your-answers')) {
        res.redirect('check-your-answers');
    } else {
        res.redirect('check-your-answers');
    }
})

// check-your-answers
router.post('/check-your-answers', function(req, res) {
    res.redirect('confirmation');
})

// Add your routes here - above the module.exports line
module.exports = router
