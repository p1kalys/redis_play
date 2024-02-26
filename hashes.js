const client = require("./client");

async function init() {
  const fieldsAdded = await client.hSet("bike:1", {
    model: "Deimos",
    brand: "Ergonom",
    type: "Enduro bikes",
    price: 4972,
  });
  console.log(`Number of fields were added: ${fieldsAdded}`);
  // Number of fields were added: 4

  const model = await client.hGet("bike:1", "model");
  console.log(`Model: ${model}`);
  // Model: Deimos

  const price = await client.hGet("bike:1", "price");
  console.log(`Price: ${price}`);
  // Price: 4972

  const bike = await client.hGetAll("bike:1");
  console.log(bike);
  // {
  //   model: 'Deimos',
  //   brand: 'Ergonom',
  //   type: 'Enduro bikes',
  //   price: '4972'
  // }

  const fields = await client.hmGet("bike:1", ["model", "price"]);
  console.log(fields);
  // [ 'Deimos', '4972' ]

  let newPrice = await client.hIncrBy("bike:1", "price", 100);
  console.log(newPrice);
  // 5072
  newPrice = await client.hIncrBy("bike:1", "price", -100);
  console.log(newPrice);
  // 4972

  let rides = await client.hIncrBy("bike:1:stats", "rides", 1);
  console.log(rides);
  // 1

  rides = await client.hIncrBy("bike:1:stats", "rides", 1);
  console.log(rides);
  // 2

  rides = await client.hIncrBy("bike:1:stats", "rides", 1);
  console.log(rides);
  // 3

  let crashes = await client.hIncrBy("bike:1:stats", "crashes", 1);
  console.log(crashes);
  // 1

  let owners = await client.hIncrBy("bike:1:stats", "owners", 1);
  console.log(owners);
  // 1

  rides = await client.hGet("bike:1:stats", "rides");
  console.log(`Total rides: ${rides}`);
  // Total rides: 3
  const stats = await client.hmGet("bike:1:stats", ["crashes", "owners"]);
  console.log(`Bike stats: crashes=${stats[0]}, owners=${stats[1]}`);
  // Bike stats: crashes=1, owners=1
}

init();
