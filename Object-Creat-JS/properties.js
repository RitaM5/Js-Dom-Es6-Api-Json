const bottle = {color: 'yellow', hold: 'water', price: 50, isClean: true};
//getting all properties names.
const keys = Object.keys(bottle);
console.log(keys);
//get all values
const values = Object.values(bottle);
console.log(values);
//getting all properties name.
const pairs = Object.entries(bottle);
console.log(pairs);
//freeze use
Object.freeze(bottle);
//seal use
Object.seal(bottle);
bottle.price = 100;
//delete property
delete bottle.isClean;
console.log(bottle);
