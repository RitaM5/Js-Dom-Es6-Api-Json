//object a bivinno data typer onekgulo property akoi sathe thakte pare.
const student = {
    id : 101,
    name : 'rita',
    major : 'mathematics',
    balance : 5000,
    isRich : false,
    subjects : ['english', 'economics','math 101'],
    bestFriend : {
        name : 'kundu',
        major : 'mathematics'
    },
    takeExam : function(){
        console.log(this.name,'taking xm');
    },
    treatDay : function(expense,boksis){
         this.balance = this.balance - expense-boksis
         return this.balance;
    }
}
student.takeExam(); //Accessing object properties(objectName.methodName())
const remaining = student.treatDay(900,100);
const remaining2 = student.treatDay(400,50);
console.log(remaining2);