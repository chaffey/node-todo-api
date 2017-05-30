// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(err);
    }

    console.log('Connected to the MongoDB');

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, res) => {
    //     if (err) {
    //         console.log('Unable to insert', err);
    //     } else {
    //         console.log(JSON.stringify(res.ops, undefined, 4));
    //     }
    // });

    // db.collection('Users').insertOne({
    //     name: 'Chris Haffey',
    //     age: 44,
    //     location: 'Denver, CO'
    // }, (err, res) => {
    //     if (err) {
    //         console.log('Unable to insert', err);
    //     } else {
    //         // console.log(JSON.stringify(res.ops, undefined, 4));
    //         console.log(res.ops[0]._id.getTimestamp());
    //     }
    // });

    db.close();
});
