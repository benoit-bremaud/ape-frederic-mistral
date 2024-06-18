// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://mongo:27017/ape', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Import routes
const routes = require('./routes');
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
