//for single year
/*function nextYear(year){
    if(year % 4 == 0){
        return true;
    }
    else {return false;}
}
var myYear = 2023;
var result = nextYear(myYear);
console.log('2023 is leapyear_', result);

//for cencutry years
function nextYear(year){
    if( year % 100 == 0 && year % 400 == 0){
        return true;
    }
    return false;
}
var result = nextYear(2000);
console.log('2000 is leapyear_', result);
var result = nextYear(2400);
console.log('2400 is leapyear_', result);
var result = nextYear(2500);
console.log('2500 is leapyear_', result);*/

//sobgulo(single and century)year / jkono year use korar jonne ar jonne

function leapYears(year){
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        console.log('yes this year is leap year.');
    }
    
    else{
        console.log('noo, it is not a leap year');
    }
}
leapYears(2015);