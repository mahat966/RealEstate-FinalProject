const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbName = 'testing-davinci';
const conxnURL = 'mongodb://127.0.0.1:27017';
const Oid = mongodb.ObjectID;


module.exports = {
    MongoClient: MongoClient,
    dbName: dbName,
    conxnURL: conxnURL,
    Oid: Oid
}