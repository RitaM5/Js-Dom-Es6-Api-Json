//jader age 20 ar upore and jara 2 dose vaccine nice tara bides jete parbe
var age = 23;
var vaccineCount = 2;
var isVaccinated = false;

if(age>20 && vaccineCount == 2){
    console.log('you may go abroad');
}

//jader age 15-20 ar moddhe and aktao vaccine neyni tar kace vaccine deyar akta msg deo
var age = 16;
var vaccineCount = 0;
var isVaccinated = false;

if(age>15 && age<20 && vaccineCount == 0){
    console.log('tomorrow is the final date for ur fst dose');
}

//jader age 15-20 ar moddhe and 2 dose vaccine nise ,tader isVaccinated update hoye true hoye jbe and msg jabe apnr 2 dose vaccine sompunno hoyese.

var age = 16;
var vaccineCount = 2;
var isVaccinated = false;

if(age>15 && age<20 && vaccineCount == 2){
    isVaccinated = true; //update hoice
    console.log('congratulations');
}