for(i = 1; i <= 20; i++){
    if(i % 3 == 0 && i % 5 == 0){ // 3 and 5 diye vag kore jodi vagses 0 hoy taile ata run hbe
        console.log('foobar');
    }
    else if(i % 3 == 0){
        console.log('foo'); // jodi sudhu 3 diye vag kore
    }
    else if(i % 5 == 0){
        console.log('bar'); //jodi sudhu 5 diye vag kore
    }
    else{
        console.log(i); // jodi uporer akta condition o na mile tahole ata run hobe
    }
}

//count numbers divisible by 3 from 1-20// 1-20 ar moddhe koyti songkha 3 dara bivajjo ta count koro.
function countNumbers(){
    let count = 0;
    for(i = 1; i <= 20 ; i++){
        if(i % 3 == 0){
            count = count + 1 ; // jokhn e condition ar sathe mile jabe tokhn e akta kore songkha jog hobe.
        }
    }
    return count;
}
let output = countNumbers()
console.log('count songkha',output);

// calculate the average of all the numbers that is divisible by 3 from 1-n.//1-n porjonto 3 dara bivajjo jay songkhagulike average or gor kore ber koro.
function countNumberDivisibleByThree(n){
    let sum = 0; let count = 0;
    for(i = 1; i <= n; i++){
        if(i % 3 == 0){
            sum = sum + i ; // condition mille prottekti songkha jog hbe. like = 0 + 3+6+9+12.....+
            count = count + 1 ;
        }
    }
    let avg = sum / count;
    return avg;
}
let result = countNumberDivisibleByThree(100);
console.log('average :',result);