
const data = require('./fakeData');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/items-detail', {useNewUrlParser : true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=> {
  console.log('We are connected');
});
const itemSpecificsSchema = mongoose.Schema({
  id: Number,
  lastUpdatedOn: Date,
  condition: String,
  country: String,
  model: String,
  material: String,
  color: String,
  brand: String,
  style: String,
  size: Number,
  productLine: String,
  features: String,
  sport: String,
  mpn: Number,
  articleType: String,
  outerSole: String,
  activity: String
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

console.log('testing');
const getData = (id, cb)=> {
  itemSpecifics.findOne({id: id}, (err, result) => {
    if (err) {
      console.log(err);
    }
    cb(result);
  });
}

module.exports.getData = getData;





