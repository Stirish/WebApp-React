const mongoose = require('mongoose');

mongoose
    .set('strictQuery', false)
    .connect('mongodb+srv://' + process.env.DB_USER_PASS + '@siteparisfictif.fr8tpid.mongodb.net/' + process.env.DB_NAME + '')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Failed to connect to MongoDB', err));
