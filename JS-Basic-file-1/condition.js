var iphonePrice = 100000;
var myBudget = 70000;
if(myBudget>iphonePrice){
    console.log("yes,you can buy a iphone!");
}
else{
    console.log("no,you cant buy a car!");
}

//else if ar bebohar
var danish = 50;
var cake = 20;
var myCash = 30;
if(danish < myCash){
    console.log('yes, you take it!');
}
else if(cake < myCash){
    console.log('yes, you will eat it!');
}
else{
    console.log('no,you cant');
}

//nested condition ar bebohar
var biskit = 50;
var vhat = 20;
var totalMoney = 15;
//packwell== false
if(biskit < totalMoney){
    //if(packwell==true){
         console.log('yes,khete parbe');
    }
    else{
        console.log('noooooooooooooo');
    }


//while ar bebohar
var roastGiven = 0;
while(roastGiven < 5){
    console.log('Roast den!');
    roastGiven ++
}

//while loop use kre odd numbr ninnoy
var number = 1;
while(number <= 20){
    console.log(number);
    number += 2
}

//for loop use kore even number ninnoy

for(var i=2; i<20; i += 2){
    console.log(i);
}

for(var j=20; 0<j; j -= 2){
    console.log(j);
}

//array ar moddhe for loop ar bebohar
var items = ['apple', 'komla', 'anggur', 'kola', 'pepe'];
for(var i=0; i<items.length; i++){
    var item = items[i];
    console.log(i);
}
