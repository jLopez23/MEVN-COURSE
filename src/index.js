const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

// Connection DB MongoDB
mongoose.connect('mongodb://localhost/mevn-database')
.then(db => console.log('DB is connected'))
.catch(err => console.log(err))

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/tasks'));

// Static files
app.use(express.static(__dirname + '/public'));

// Server is lintening
app.listen(app.get('port') , () => {
    console.log('Server on port', app.get('port'));
})