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

function add(){
    console.log(this);
}