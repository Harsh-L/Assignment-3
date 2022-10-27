const mongoose = require('mongoose');
mongoose.connect(process.env.DBURL);

var db = mongoose.connection;
db.on('error', (err) => {
    console.log("error: " + err);
})

module.exports = mongoose;