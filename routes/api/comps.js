const express = require('express');
const router = express.Router();

// Load Book model
const Comps = require('../../models/Comps');

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Comps.find()
    .then(comps => res.json(comps))
    .catch(err => res.status(404).json({ nocompsfound: 'No Comps found' }));
});

module.exports = router;