const mongoose = require('mongoose');
const config = require('config');
const express =  require('express');
const app = express();
const genres = require('./routes/genres');
const customers = require('./routes/customers');

mongoose.connect(config.get('dbConn'))
    .then(console.log('Connected to MongoDB..'))
    .catch(err => console.log('Could not connect to MongoDB..', err));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on port ${port}...`));