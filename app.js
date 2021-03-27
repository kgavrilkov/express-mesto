const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const mongoose = require('mongoose');
const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use((req, res, next) => {
  req.user = {
    _id: '60599b80ca433982ed3aaf49'
  };
  next();
});
app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})