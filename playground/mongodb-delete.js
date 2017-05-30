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

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'eat lunch'
    // }).then((res) => {
    //     console.log(res);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'eat lunch'
    // }).then((res) => {
    //     console.log(res);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((doc) => {
    //     console.log(doc);
    // });

    db.collection('Users').deleteMany({
        name: 'Chris Haffey'
    }).then((res) => {
        console.log(JSON.stringify(res, undefined, 4));
    });

    db.collection('Users').deleteOne({
        _id: new ObjectID('592dcd5ea162535a7035cb65')
    }).then((res) => {
        console.log(JSON.stringify(res, undefined, 4));
    });

    db.close();
});
