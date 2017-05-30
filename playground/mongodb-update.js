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

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("592ddab7a08e8de1998f35da")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(JSON.stringify(res, undefined, 4));
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("592dcbc2ac61545950c5aa33")
    }, {
        $set: {
            name: 'Chris'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(JSON.stringify(res, undefined, 4));
    })

    db.close();
});
