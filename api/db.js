// db connection

const mongoose = require('mongoose');
const dbConfig = require('./configs/db.config');
const conxnURL = dbConfig.conxnURL + '/' + dbConfig.dbName;


mongoose.connect(conxnURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongoose.connection.once('open', function () {
    console.log('db connection success');
})

mongoose.connection.on('err', function (err) {
    console.log('db connection failed ', err)
})
