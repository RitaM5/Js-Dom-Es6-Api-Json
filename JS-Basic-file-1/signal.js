var signal1 = "yellow";
if(signal1 == 'green'){
    console.log('noooooo,you cant go');
}

 else if(signal1 == 'red'){
    console.log('you can stop now');
}

else{
    console.log('yes,you can go');
}
function thisNumber(n){
    var cube = (n * (n+1)/2);
    return Math.pow(cube,2);
}
var result = thisNumber(12);
console.log(result);