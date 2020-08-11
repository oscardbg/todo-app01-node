const express = require('express');
const router = express.Router();

const Todo = require('../models/todo');
const { route } = require('../../Blog_md_mern/routes/articles');
const { text } = require('express');

router.get('/new', (req, res) => {
    res.render('new');
})

router.post('/', (req, res) => {
    const todo = new Todo({
        task: req.body.todoTxt
    });
    try{
        todo.save();
        res.redirect('/');
    }catch(error){
        //res.render('todos/index', {todos: Todo.find()});
        console.log('error foudned');
    }
})

router.delete('/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.redirect('/');
})

module.exports = router;