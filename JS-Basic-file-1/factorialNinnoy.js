//7! ninnoy
// factorial ninnoy ar somoy factorial and i ar man sunno neoa jabena, nahole output always sunno asbe.

//var factorial = 1; //aita factorial ninnoy ar somoy bairei call korte hobe.jate prottekbar output ar sathe    songkhagulor gun hoy. nahole prottekbar songkhar sathe factorial 1 ar gun hoto,tate factorial ninnoy hoto na

var factorial = 1;
for(i = 1; i <= 7; i++){
    factorial = factorial * i ;
}
console.log("factorial is", factorial);

//abar function diye 7! ninnoy

function getFactorial(num){
    var factorial = 1;
    var i = 1;
    while(i <= num){
        factorial = factorial * i ;
        i++;
    } 
    return factorial;
}
var result = getFactorial(9);
console.log("first factorial is", result);
var result = getFactorial(8);
console.log("second factorial is", result);

//abar !6 ar 6 theke 1 obdhi orthat upor theke niche ninnoy korbo
function gotFactorial(number){
    let factorial = 1;
    for(i = number; i >= 1; i--){
        factorial = factorial * i ;
    } 
    console.log("this factorial is", factorial);
}
gotFactorial(6);