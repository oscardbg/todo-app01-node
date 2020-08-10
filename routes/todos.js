const express = require('express');
const router = express.Router();

const Todo = require('../models/todo');
const { route } = require('../../Blog_md_mern/routes/articles');

router.get('/new', (req, res) => {
    res.render('new');
})

module.exports = router;