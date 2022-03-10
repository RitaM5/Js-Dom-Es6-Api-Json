//sobcheye cheapest phone ninnoy
const phones =[
    {name:'samsung s5', price: 45000, storage:32},
    {name: 'walton m32', price: 15000, storage:8},
    {name:'xiomi m3', price: 1200, storage:16}
];
let cheapest = phones[0];
for(const phone of phones){
    //compare price only
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
   
}   
console.log(cheapest);

//phoner total rate
  let cart=[
    {name:'samsung s5', price: 25000, storage:32},
    {name: 'walton m32', price: 15000, storage:8},
    {name:'xiomi m3', price: 1200, storage:16}
];
let cartTotal = 0;
for(const product of cart){
    cartTotal = cartTotal + product.price ;
}
console.log(cartTotal);

//megashopping hiseb

let products=[
    {name:'samsung s5', price: 25000, storage:32, quantity: 1},
    {name: 'walton m32', price: 15000, storage:8, quantity:2},
    {name:'xiomi m3', price: 1200, storage:16, quantity:3}
];
let totalPrice = 0;
for(const product of products){
    total = product.price * product.quantity;
    totalPrice = totalPrice + total ;
}
console.log(totalPrice);
