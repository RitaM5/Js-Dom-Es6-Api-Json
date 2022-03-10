// kono array theke jogfol ninnoy koro
/*let numbers = [44, 23, 34, 54];
let sum = 0;
for(i = 0; i < numbers.length; i++){
    let element = numbers[i];
    sum = sum + element;
}
console.log(sum);*/
//function diye try
function arrayNumber(num){
    let sum = 0;
    for(i = 0; i < num.length; i++){
    let element = num[i];
    sum = sum + element;
  }
  return sum;
}
var result = arrayNumber([44,23,34,54]);
console.log('array tir jogfol', result);