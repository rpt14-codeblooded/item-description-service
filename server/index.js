const request = require('request');
const path = require('path');
const bodyParser = require('body-parser');
const getData = require('../database/index.js').getData;
const express = require('express');
const app = express();

const port = 3001;
const logger = require('morgan');
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api/items/:id',express.static(path.join(__dirname,'../public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.get('/:id', (req, res) => {
  let id = req.params.id;
  getData(id, (result) => {
    const newObj = {
      'item number': result.id,
      'Last updated on': result.lastUpdatedOn,
      Condition: result.condition,
      Model: result.model,
      Style: result.style,
      'Article type': result.articleType,
      MPN: result.mpn,
      'Product Line': result.productLine,
      'Outer Sole': result.outerSole,
      Material: result.material,
      Country: result.material,
      Sport: result.sport,
      Brand: result.brand,
      Activity: result.activity,
      Color: result.color,
      Size: result.size,
      Features: result.features
    }
    console.log(newObj);
    res.json(newObj);
  });

});
app.listen(port, () => {
  console.log("server listening on port:", port);
});

