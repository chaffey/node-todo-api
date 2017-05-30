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

    // db.collection('Todos').find({
    //     _id: new ObjectID('592dcad152e73658d2d7b1b9')
    // }).toArray().then((docs) => {
    //     console.log('Todos -');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }).catch((err) => {
    //     console.log('Unable to complete work', err);
    // });

    // db.collection('Todos').find({completed: false}).count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => console.log('Unable to complete work', err));

    db.collection('Users').find({
        name: 'Chris Haffey'
    }).toArray().then((docs) => {
        console.log('Docs - ');
        console.log(JSON.stringify(docs, undefined, 4));
    }, (err) => console.log('Unable to do command', err));

    db.close();
});
