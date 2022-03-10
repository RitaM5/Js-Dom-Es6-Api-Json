//1-10 porjonto likho
function consoleNumber(i){
    if(i > 10){
        return ;
    }
    console.log(i);
    consoleNumber( i + 1);
}
consoleNumber(1);

//5-1 a number reverse kore jogfol ber koro
function sum(i){
    if(i == 1){
         return 1 ;
    }
    return i + sum(--i);
}
console.log('jogfol =',sum(5));

// 4! ninnoy koro
function factorial(i){
    if(i == 1){
        return 1 ;
    }
    return i * factorial(--i);
}
console.log(factorial(4));

//find the matching product by searching products

let products = [
    {name : 'iphone-13', price : 100000},
    {name : 'iphone-12', price : 80000},
    {name : 'apple watch', price : 20000},
    {name : 'smart watch', price : 15000},
    {name : 'rk watch', price : 5000},
    {name : 'cortez watch', price : 4000}
]

function searchProducts(products,seatchText){
    let result = [];
    for(let product of products){
        //console.log(product.name);
        if(product.name.includes(seatchText)){
            result.push(product);
        }
    }
    return result;
}
var matchingProducts = searchProducts(products,'watch');
console.log(matchingProducts);

//10000 tk ar besi dekhbona
function damDor(products){
for(let ponno of products){
    if(ponno.price > 10000){
        continue;
    }
    console.log(ponno);
}
}
var output = damDor(products);
console.log(output);