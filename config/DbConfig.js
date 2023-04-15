const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect(
    "mongodb://localhost:27017/portfolio",
    { useNewUrlParser: true, useUnifiedTopology: true },
)
    .then(() => console.log('Connected Succefully'))
    .catch((err) => { console.log('Connection failed ' + err) });