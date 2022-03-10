//numberarray ar songkha gulor moddhe sobcheye boro songkha ninnoy.
/*function largestNumber(number){
    let largest = 0 ;  // (-) maner array hole akhane (let largest= number[0]) call korte hobe.

    for(let i = 0; i<number.length; i++){
        let element = number[i];
        if(element > largest){
           largest = element ;
        }
    }
    return largest;
}
var ages = [12, 54, 2, 34, 75, 32, 12];
var oldest = largestNumber(ages);
console.log(oldest);*/

// r akti niom
    //var number = [12, 54, 2, 34, 95, 32,];
    //number.sort(function(a, b){return a - b});
    //console.log(number)

    function largeNum(number){
        number.sort(function(a, b){return b - a});
        console.log(number);
        return number[1];
    }
   let sult = largeNum([12, 54, 2, 34, -95, 32,]);
   console.log(sult);



//(-) man diye try
function largestNumber(number){
    let largest = number[0] ;  // tahole 0 call korle number array ar fst songkhata largest a show korbe. 

    for(let i = 0; i<number.length; i++){
        let element = number[i];
        if(element > largest){
           largest = element ;
        }
    }
    return largest;
}
var ages = [-12, -7, -17, -5];
var oldest = largestNumber(ages);
console.log(oldest);

// array ar moddhe theke sobcheye soto songkhati ninnoy koro.

function lowestNumber(number){
    let lowest = number[0] ;  

    for(let i = 0; i<number.length; i++){
        let element = number[i];
        if(element < lowest){
           lowest = element ;
        }
    }
    return lowest;
}
var ages = [78, 45, 34, 7, 10];
var smallest = lowestNumber(ages);
console.log(smallest);

//second largest number ninnoy
function secondMax(arr){
    var max = Math.max.apply(null,arr); //sobcheye boro number ninnoy ar law
    arr.splice(arr.indexOf(max), 1); //remove the fst max number.
    return Math.max.apply(null,arr);
}
var result = secondMax([12, 54, 2, 34, 75, 32,]);
console.log(result);

//largest number ar onno niyom

   function lowNum(number){
    number.sort(function(a, b){return a - b});
    console.log(number);
    return number[4];
   }
  var out = lowNum([12, 54, 2, 34, 75, 32])
  console.log(out);

  //string ar khetre sobcheye soto nam
  function bijorNam(name){
    console.log(name.reduce((a, b) => a.length <= b.length ? a : b));
  }
  bijorNam(['nafisha', 'rita', 'eva']);