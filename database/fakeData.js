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
  let LastUpdatedOn = faker.date.recent();
  let Condition = faker.lorem.sentences();
  let Brand = faker.lorem.word();
  let Country = faker.address.country();
  let Color = faker.commerce.color();
  let Model = faker.lorem.word();
  let Material = faker.commerce.productMaterial();
  let Style = faker.lorem.words();
  let Size = faker.random.number({min: 1, max: 13});
  let Product_Line = faker.commerce.productName();
  let Features = faker.lorem.sentences();
  let Sport = faker.lorem.word();
  let MPN = faker.random.number(1000000, 9999999);
  let ArticleType = faker.commerce.productAdjective();
  let OuterSole = faker.commerce.productMaterial();
  let Activity = faker.commerce.productAdjective();
  data.push({
    id,
    LastUpdatedOn,
    Condition,
    Country,
    Model,
    Material,
    Color,
    Brand,
    Style,
    Size,
    Product_Line,
    Features,
    Sport,
    MPN,
    ArticleType,
    OuterSole,
    Activity
  });
}

module.exports = data;
