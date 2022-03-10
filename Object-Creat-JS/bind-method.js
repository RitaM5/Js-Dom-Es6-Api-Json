const rita = {
    id : 101,
    name : 'rita',
    balance : 5000,
    treatDay : function(expense){
         this.balance = this.balance - expense;
         console.log(this);
         return this.balance;
    }
}

const heroBalam = {
    id : 102,
    name : 'balam',
    balance : 6000,
}
rita.treatDay(100);
const heroTreatDay = rita.treatDay.bind(heroBalam);//heroTreatDay akhane akti function.
heroTreatDay(500);
heroTreatDay(200);
heroTreatDay(300);

rita.treatDay(400);

//summery : kono akta object a jodi function method thake tahole oi method diye mane (this) diye onno r akta object ar property k call kora jay ba use kora jay.