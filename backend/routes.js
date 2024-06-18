// backend/routes.js
const express = require('express');
const router = express.Router();

// Route de test
router.get('/test', (req, res) => {
  res.json({ message: 'API is working' });
});

module.exports = router;
