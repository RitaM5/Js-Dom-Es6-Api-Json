// 1. using object literal. most of the case ai objecct use krbo.
const student = {name:'sakib al hasan', job:'cricketer'};
//console.log(student.name);
// 2. constructor_class a use kora hoy
//const person = new Object();
// 3.
//const human = Object.create(null);//ans: no prototype
const human = Object.create(student);//var student theke inherit korse.
console.log(human.job);
// 4. creating object from class.ata upore mone hoy cls diye korese kintu vitore function diye kora.
class People { // (class) k Syntactical Sugar bole
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
const peop = new People('manush', 12)
console.log(peop.name);

//function -cls j function ar moto kaj kre ata tar try
function myManush(name){
    this.name = name;
}
const man = new myManush ('kader');
console.log(man);