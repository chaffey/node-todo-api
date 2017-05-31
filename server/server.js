const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// Port for server startup set by Heroku
const port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.status(200).send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
}).get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.status(200).send(todos);
    }, (e) => {
        res.status(400).send(e);
    });
}).post('/users', (req, res) => {
    var user = new User({
        email: req.body.email
    });

    user.save().then((doc)=> {
        res.status(200).send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = { app };
