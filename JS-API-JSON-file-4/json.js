//Notation
//JSON = javascript object notation.
//step-1
const shop = {
    name :'Alia Store',
    address : 'Ranbir road',
    profit : 15000,
    products : ['laptop','mobile','pepsi'],
    owner: {
        name:'alia',
        profession:'actor'
    },
    isExpensive : false
}
//console.log(shop);
const shopStringified = JSON.stringify(shop);//object take string a covert korbe.
console.log(shopStringified);
//abar ai string k js a access korte hole parse kore normal object a declare korte hobe.
const converted = JSON.parse(shopStringified);
//console.log(converted); or
console.log(converted.owner);
