const faker = require('faker');
const data = [];
for (var counter = 1; counter <=100; counter++) {
  let id = counter;
  let condition = faker.lorem.sentences();
  let brand = faker.lorem.word();
  let country = faker.address.country();
  let color = faker.commerce.color();
  let model = faker.lorem.word();
  let material = faker.commerce.productMaterial();
  let style = faker.lorem.words();
  let size = faker.random.number({min: 1, max: 13});
  let productLine = faker.commerce.productName();
  let features = faker.lorem.sentences();
  let sport = faker.lorem.word();
  let mpn = faker.random.number({min:100000, max:999999});
  let articleType = faker.commerce.productAdjective();
  let outerSole = faker.commerce.productMaterial();
  let activity = faker.commerce.productAdjective();
  let month = faker.date.month();
  let date = faker.random.number({min: 01, max: 31});
  let year = faker.random.number({min: 2000, max: 2019});
  let time = `${faker.random.number({min: 1, max:23})}:${faker.random.number({min: 01, max:59})}:${faker.random.number({min: 01, max:59})} PDT`;
  let lastUpdatedOn = `${month} ${date}, ${year} ${time}`;
  let obj = {
    country,
    model,
    material,
    color,
    brand,
    style,
    size,
    productLine,
    features,
    sport,
    mpn,
    articleType,
    outerSole,
    activity
  }
  let props = []
  let newObj = {
    id,
    lastUpdatedOn,
    condition
  };
  for (var key in obj) {
    props.push(key);
  }

  let max = Object.keys(obj).length - 1;
  let random = faker.random.number({min:8, max: max});
  for (var count = 0; count <=random; count++) {
    let index = faker.random.number({min: 0, max: max});
    newObj[props[index]] = obj[props[index]];

  }
  data.push(newObj);

}

module.exports = data;
