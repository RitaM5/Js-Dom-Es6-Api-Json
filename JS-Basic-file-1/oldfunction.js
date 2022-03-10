function myAge(num){
    if(num % 2 == 1){ //(num % != 0) atao lekha jay
        return true;
    }
    return false;
}
var result = myAge(21);
console.log(result);
var result = myAge(22);
console.log(result);

//odd
function myAge(num){
    if(num % 2 == 0){
        return true;
    }
    return false;
}
var result = myAge(22);
console.log(result);

//1-100 ar moddhe odd and even songkha ninnoy
function thisNumber (num){
        var i = num;
        for(i=1; i<=100; i++){
            if(i % 2 == 0){
                console.log(i ,' is even number');
            }

           else if(i % 2 != 0){
                console.log(i ,' is odd number');
            }
        }

}
thisNumber();