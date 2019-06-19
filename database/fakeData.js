// Condition: String,
//   Country: String,
//   Model: Schema.Types.Mixed,
//   Color: String,
//   Brand: String,
//   Style: String,
//   UpdatedOn: Date,
//   Size: Number,
//   Product_Line: String,
//   Features: String
const faker = require('faker');
const data = [];
//console.log(UpdatedOn,"\n", Condition,"\n",  Brand,"\n", Country,"\n", Color,"\n", Model, "\n",Style,"\n", Size,"\n", Product_Line,"\n", Features);
for (var counter = 1; counter <=100; counter++) {
  let id = counter;
  let UpdatedOn = faker.date.recent();
  let Condition = faker.lorem.words();
  let Brand = faker.lorem.word();
  let Country = faker.address.country();
  let Color = faker.commerce.color();
  let Model = faker.lorem.word();
  let Style = faker.lorem.words();
  let Size = faker.random.number({min: 1, max: 13});
  let Product_Line = faker.commerce.productName();
  let Features = faker.lorem.sentences();
  data.push({
    id,
    Condition,
    Country,
    Model,
    Color,
    Brand,
    Style,
    UpdatedOn,
    Size,
    Product_Line,
    Features
  });
}


module.exports = data;
