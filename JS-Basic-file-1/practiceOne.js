// 1 no qsn ans
var a = "akash";
var b = 12;
var c = false;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//2 no qsn ans:
const number = 'akash';
let num = [13,24,0];
console.log(number,num);
//3 no qsn ans:
var num1 = 6;
var num2 = 4;
var c = num1 + num2;
var d = c * num2;
var num3 = d - num1;
let num4 = num3 / num2;
let num5 = c % 2;
console.log(c,d,num3,num4,num5);
//4 no qsn ans:
let no1 = 6;
let no2 = 6;
/*if(no1>no2){
    console.log('no1 is big');
}
else if(no1<no2){
    console.log('no2 is big');
}
else if(no1==no2){
    console.log('no1 and no2 is equal');
}*/


 if(no1!=no2){
    console.log('no1 and num2 is not equal');
}
else if(no1 >= no2){
    console.log('no1 holo num2 ar soman');
}
else if(no1<= no2){
    console.log('num2 holo num1 ar soman');
}
// 5 no qsn ans :
function leapYear(year){
    if((year % 2 == 0 && year % 100 != 0) || year % 400 == 0){
        console.log('its leap year');
    }
    else{
        console.log('its not a leap year');
    }
}
leapYear(2024);
//6 no qsn ans :
var myCash = 6000;
let budget = 8000;
if(myCash > budget){
    console.log('yahooo khaite jabo boofe tee');
}
else{
    console.log('naah jaai,ghumai ajk');
}
//7 no qsn ans :
var i = 7;
while(i <= 19){
    if(i % 2 == 1){
        console.log(i);
    }
    i++;
}
// 8 no qsn ans :
 let songkha = [12, 5, 7, 9,10,3];
  console.log(songkha.length);  //array te mot koyta upadan ace ata korle paoa jbe
  songkha[4] = 35;
  console.log(songkha); // 4 no position ar number chng
  songkha.shift(); // fst theke 12 remove
  songkha.unshift(56);// 56 jog koreci fst a
  console.log(songkha); 
  var output = songkha[1] + songkha[3];
  console.log(output);


for(var i = 0; i <= songkha.length; i++){
    //console.log(songkha.length); //array te koyta upadan ace ata korle paoa jbe
    var result = songkha[i];
    console.log(result); //array ar sob number show krbe
}
//9 no qsn ans :
var names = ['apple', 'komla', 'anggor', 'ata'];
for(const name of names){
    console.log(names.indexOf(name)); //positon songkha ber hobe
    console.log(name); //array ar nam guli show krbe
}
//10 no qsn ans :
var high = [50, 89, 56, 82, 85, 92, 43, 60, 98];
let khamar = [];
for(const element of high){
    if(element>80){
       khamar.push(element);
    }
}
console.log(khamar);
//11 no qsn ans :

function finalResult(gun1,gun2,gun3){
    output = gun1*gun2*gun3;
    return output;
}
var result = finalResult(3,5,2);
console.log(result);

//12 no qsn ans :
var products ={
    name : 'akash',
    price : 500,
    model : 5
}
 //products.price = 600;
 products['price'] = 600;
 console.log(products);
 //13 no qsn ans :
 function feetToInch(feet){
     inch = feet * 12;
     return inch;
 }
 var result = feetToInch(6);
 console.log(result);
 //14 no qsn ans :
 function centimeterToMeter(cent){
     meter = cent / 100 ;
     return meter;
 }
 var output = centimeterToMeter(1000);
 console.log(output);

 // 15 no qsn ans :
 function paperRequirements(first,second,third){
     var fstBoiPristha = 100 ;
     var secndBoiPristha = 200;
     var thirdBoiPristha = 300;
     var fstboiTotalPristha = fstBoiPristha * first;
     var secndboiTotalPristha = secndBoiPristha * second;
     var thirdboiTotalPristha = thirdBoiPristha * third;
     totalPristhaKagoj = fstboiTotalPristha + secndboiTotalPristha + thirdboiTotalPristha;
     return totalPristhaKagoj;
 }
 var total = paperRequirements(3,2,1);
 console.log(total);

 //16 no qsn ans :
 function bestFriend(arr){
     let largest = arr[0];
     for(let name of arr){
         if(name.length > largest.length){ // string array te boro songkha ninnoy a condition a .length add kore
             largest = name;
         }
     }
     return largest;
     
 }
 var result = bestFriend(['tony', 'fairuj', 'mona','tuba','nafisa']);
 console.log(result);

 //17 no qsn ans :
 var numbers = [34, 56, 8, -9, 54, -3, -7, 78];
 var positiveArray = [];
 for(i = 0 ; i <= number.length; i++){
     var elemnt = numbers[i];
     if(elemnt > 0){
         positiveArray.push(elemnt);
     }
     else{
         break;
     }
 }
 console.log(positiveArray);
 
// Problem 1 :

 function anaToVori(ana){
    if(typeof ana == 'number' && ana > 1){
        let Vori = ana / 16 ;
        return Vori;
    }
    else{
        let error = 'please, type a positive number value';
        return error;
    }
 }

// Problem 2 :

     function pandaCost(singgara,somucha,jilapi){
     
     if((typeof singgara == 'number' && singgara > 0) && (typeof somucha == 'number' && somucha > 0) && (typeof jilapi == 'number' && jilapi > 0)){

        let singgaraQuantity = 7 ;
        let somuchaQuantity = 10 ;
        let jilapiQuantity = 15 ;
        
        let totalSinggaraQuantity = singgara * 7 ;
        let totalSomuchaQuantity = somucha * 10 ;
        let totalJilapiQuantity = jilapi * 15 ;
        
        let totalTaka = totalSinggaraQuantity + totalSomuchaQuantity + totalJilapiQuantity ;
        return totalTaka ;
     
     }
     else{
         let msg = "write the positive number !"
         return msg;
     }    
 }

// Problem 3 :

 function picnicBudget(peoples){
     
    if(typeof peoples != 'number' || peoples < 1){
        let text = "Hey, please code the positive value !"
        return text;
    }


     if(peoples <= 100 || peoples < 100){
         firstPeopleCount = peoples * 5000 ;
         return firstPeopleCount;
     }
     else if(peoples <= 200 || peoples < 200){
         firstPeopleCount = 100 * 5000 ;
               remainValue = peoples - 100 ;
         secondPeopleCount = remainValue * 4000 ;
            totalPeopleTaka = firstPeopleCount + secondPeopleCount ;
            return totalPeopleTaka ;
     }
     else{
         firstPeopleCount = 100 * 5000 ;
         secondPeopleCount = 100 * 4000 ;
               remainValue = peoples - 200 ;
          thirdPeopleCount = remainValue * 3000 ;
                 totalTaka = firstPeopleCount + secondPeopleCount + thirdPeopleCount ;
                return totalTaka ;
     }
 }

 // Problem 4 :

  function oddFriend(names){
      for(i = 0; i <= names.length; i++){
            element = names[i];
            if(typeof element != 'string'){
                let msg = 'please write string value !';
                return msg;
            }
            for (let i = 0; i <names.length; i++) {
                let element = names[i]
                if(element.length % 2 != 0){
                    oddName = element;
                    return oddName;
                }
            }
      }
  }
  
