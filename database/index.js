const data = require('./fakeData');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/items-detail', {useNewUrlParser : true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', ()=> {
//   console.log('We are connected');
// });
const itemSpecificsSchema = mongoose.Schema({
  Condition: String,
  id: Number,
  Country: String,
  Model: String,
  Color: String,
  Brand: String,
  Style: String,
  UpdatedOn: Date,
  Size: Number,
  Product_Line: String,
  Features: String
}, {strict: false});
itemSpecificsSchema.set('validateBeforeSave', false);
const itemSpecifics = mongoose.model('itemSpecifics', itemSpecificsSchema);

const save = (array) => {
  itemSpecifics.create(array, (err, item)=> {
    if (err) {
      console.log(err);
    }
  });
}
save(data);

const getData = (id, cb)=> {
  itemSpecifics.findOne({id: id}, (err, result) => {
    if (err) {
      console.log(err);
    }
    cb(result);
  });
}

module.exports = getData;



