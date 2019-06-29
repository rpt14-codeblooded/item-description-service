const request = require('request');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const {getData} = require('../database/index.js');
const express = require('express');
const app = express();
const port = 3001;
app.listen(port, () => {
  console.log("server listening on port:", port);
});

app.use(express.static(path.join(__dirname, '../public')));
app.use('/items/:id',express.static(path.join(__dirname,'../public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.get('/api/items/:id', (req, res) => {
  let id = req.params.id;
  getData(id, (result) => {
    res.json(result);
  });

});

