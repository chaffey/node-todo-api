require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const {ObjectID} = require('mongodb');
const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

// Port for server startup set by Heroku
const port = process.env.PORT;

var app = express();

// Setup express add-ons
app.use(bodyParser.json());

// Setup express routes for todos
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
}).get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        });
    }, (e) => {
        res.status(400).send(e);
    });
}).get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (ObjectID.isValid(id)) {
        Todo.findById(id).then((todo) => {
            if (todo) {
                res.send({
                    todo
                });
            } else {
                res.status(404).send();
            }
        }, (e) => {
            res.status(400).send();
        });
    } else {
        res.status(404).send();
    }
}).delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if (todo) {
            res.send({
                todo
            });
        } else {
            res.status(404).send();
        }
    }, (e) => {
        res.status(400).send();
    });
}).patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {
        $set: body
    }, {
        new: true
    }).then((todo) => {
        if (todo) {
            res.send({
                todo
            });
        } else {
            res.status(404).send();
        }
    }).catch((e) => {
        res.status(400).send();
    });
});

// Setup express routes for users
app.post('/users', (req, res) => {
    var newUser = _.pick(req.body, ['email', 'password']);
    var user = new User(newUser);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

// Start the fucker up!
app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {app};
