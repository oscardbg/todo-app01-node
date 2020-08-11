const express = require('express');
const mongoose = require('mongoose');

const Todo = require('./models/todo');
const todoRouter = require('./routes/todos');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/todosdb01', { useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/todos', todoRouter);

app.get('/', async (req, res) => {
    const todos = await Todo.find();

    res.render('index', {todos});
})

app.listen(PORT, () => console.log('Listening on port: ' + PORT));