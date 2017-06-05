const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '592f38be0f5e40eccd737a411';

if(ObjectID.isValid(id)) {
    Todo.find({
        _id: id
    }).then((docs) => {
        console.log('Todos', docs);
    }, (e) => {
        console.log(e);
    });

    Todo.findOne({
        _id: id
    }).then((doc) => {
        console.log('Todo', doc);
    }, (e) => {
        console.log(e);
    });

    Todo.findById(id).then((doc) => {
        if(doc) {
            console.log('Todo by ID', doc);
        } else {
            console.log('ID not found');
        }
    }).catch((e) => {
        console.log(e);
    });
} else {
    console.log('Invalid ID');
}

mongoose.disconnect()
