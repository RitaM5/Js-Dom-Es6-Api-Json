const rita = {
    id : 101,
    name : 'rita',
    balance : 5000,
    treatDay : function(expense,boksis,tax){
         this.balance = this.balance - expense-boksis-tax ;
         console.log(this);
         return this.balance;
    }
}

const heroBalam = {
    id : 102,
    name : 'balam',
    balance : 6000,
}
//call
 rita.treatDay.call(heroBalam,500,100,50);
rita.treatDay.call(heroBalam,500,200,30); 
// r akti niyom
rita.treatDay.apply(heroBalam,[500,100,40]);
rita.treatDay.apply(heroBalam,[500,100,50]);

//summery : kono akta object a jodi function method thake tahole oi method diye mane (this) diye onno r akta object use kora jay.ai bind hocce oi function take bind kore notun akta function toiri kore setake call kore kore use korte hoy.
// call hocce sorasori call korbe,call korte gele oi j function take call korbo setake ami,j object ar jonne korbo setake prothom parameter a rakhbo. r baki parameter guloke comma separation kore kore dibo.
// r apply hocce notun j object ar upor apply korbo seta fst parameter dibo diye baki guloke akti array te nibo.