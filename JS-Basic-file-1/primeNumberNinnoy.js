/*function checkPrimeNumber(num){
    for(i=2; i<num; i++){
        if(num % i != 0){
            return true;
        }
        else{
            return false;
        }
    }
}
var result = checkPrimeNumber(5);
console.log(result);*/

function checkPrimeNumber(num){
    for(let i=2; i <= num; i++){
        var numbr = i;
        console.log(numbr);
        for(let j = 2; j < numbr; j++){
            if(numbr % j != 0){
               var element = numbr;
            }
        }
    }
}
var result = checkPrimeNumber(100);
console.log(result);