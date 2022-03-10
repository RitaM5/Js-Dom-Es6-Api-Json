//fibonacci holo dhara. ata diye array banano jay.
// two = one + 0
// 4th = three + two
// 5th = 4th + three
// 6th = 5th + 4th

/*let fibo = [0, 1,]; //ata likhtei hobe always.
for(let i = 2; i <= 20; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2]; // nth= (n-1)th + (n-2)th
}
console.log(fibo);*/

//funtion diye koro.
function fiboNumber(num){
    if(typeof num != "number"){
        return 'please give a number';
    }
    if(num<2){
        return "please enter a positive number greater than 1" ;
    }
    let fibo = [0, 1,]; 
    for(let i = 2; i <= num; i++){
    fibo[i] = fibo[i - 1] + fibo[i - 2]; 
   }
   return fibo;
}
var result = fiboNumber(16);
console.log(result);

/*
if(typeof num != number){
    return 'please give a number';// jodi keu number na likhe letter use kore tahole ai msg show korbe.
}
if(num<2){
    return "please enter a positive number greater than 1" // jodi keu 2 ar soto and (-) man likhe tahole ata show korbe.
}
 */
function oddName(name){
    for(i = 0; i <= name.length; i++){
          element = name[i];
          if(typeof element != 'string'){
              let msg = 'kha error !';
              return msg;
          }
          for (let i = 0; i <= name.length; i++) {
              let element = name[i];
              if(element.length % 2 != 0){
                  oddName = element;
                  return oddName;
              }
          }
    }
}
var result = oddName(['tuba', 'rita', 'nafisha']);
console.log(result);