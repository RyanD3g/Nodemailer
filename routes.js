const express = require('express');
const router = express.Router();
const { sendmailer } = require('./src/controllers/send');
const { home } = require('./src/controllers/home');
router.post('/send', sendmailer);
router.get('/', home)

module.exports = router;