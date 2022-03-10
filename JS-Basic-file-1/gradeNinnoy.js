function theirGrade (number){

    if(number >= 80 && number <= 100){
        return "A+" ;
    }
    else if(number >= 70 && number < 80){
        return "A" ;
    }
    else if(number >= 60 && number < 70){
        return "A-" ;
    }
    else if(number >= 50 && number < 60){
        return "B" ;
    }
    else if(number >= 40 && number < 50){
        return "C" ;
    }
    else if(number >= 30 && number < 40){
        return "D" ;
    }
    else{
        return 'F';
    }
}
var result = theirGrade(72);
console.log("your grade is ",result);

//jodi function ar vitore console korte chai tahole avabe korte hobe
function theirGrade (number){

    if(number >= 80 && number <= 100){
        grade = "A+" ;
    }
    else if(number >= 70 && number < 80){
        grade = "A" ;
    }
    else if(number >= 60 && number < 70){
        grade = "A-" ;
    }
    else if(number >= 50 && number < 60){
        grade = "B" ;
    }
    else if(number >= 40 && number < 50){
        grade = "C" ;
    }
    else if(number >= 30 && number < 40){
        grade = "D" ;
    }
    else{
        grade = 'F';
    }

    console.log("your grade is ", grade);
}
theirGrade(22);