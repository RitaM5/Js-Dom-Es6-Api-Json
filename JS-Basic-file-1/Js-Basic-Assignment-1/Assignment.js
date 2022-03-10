
// Problem 1 :
 function anaToVori(ana){
    if(typeof ana == 'number' && ana > 1){
        let Vori = ana / 16 ;
        return Vori;
    }
    else{
        let error = 'please, type a positive number value';
        return error;
    }
 }

// Problem 2 :
     function pandaCost(singgara,somucha,jilapi){
     
     if((typeof singgara == 'number' && singgara > 0) && (typeof somucha == 'number' && somucha > 0) && (typeof jilapi == 'number' && jilapi > 0)){

        let singgaraQuantity = 7 ;
        let somuchaQuantity = 10 ;
        let jilapiQuantity = 15 ;
        
        let totalSinggaraQuantity = singgara * 7 ;
        let totalSomuchaQuantity = somucha * 10 ;
        let totalJilapiQuantity = jilapi * 15 ;
        
        let totalTaka = totalSinggaraQuantity + totalSomuchaQuantity + totalJilapiQuantity ;
        return totalTaka ;
     
     }
     else{
         let msg = "write the positive number !"
         return msg;
     }    
 }

// Problem 3 :
 function picnicBudget(peoples){
     
    if(typeof peoples != 'number' || peoples < 1){
        let text = "Hey, please code the positive value !"
        return text;
    }
     if(peoples <= 100 || peoples < 100){
         firstPeopleCount = peoples * 5000 ;
         return firstPeopleCount;
     }
     else if(peoples <= 200 || peoples < 200){
         firstPeopleCount = 100 * 5000 ;
               remainValue = peoples - 100 ;
         secondPeopleCount = remainValue * 4000 ;
            totalPeopleTaka = firstPeopleCount + secondPeopleCount ;
            return totalPeopleTaka ;
     }
     else{
         firstPeopleCount = 100 * 5000 ;
         secondPeopleCount = 100 * 4000 ;
               remainValue = peoples - 200 ;
          thirdPeopleCount = remainValue * 3000 ;
                 totalTaka = firstPeopleCount + secondPeopleCount + thirdPeopleCount ;
                return totalTaka ;
     }
 }

 // Problem 4 :
  function oddFriend(names){
      for(i = 0; i <= names.length; i++){
            element = names[i];
            if(typeof element != 'string'){
                let msg = 'please write string value !';
                return msg;
            }
            for (let i = 0; i <= names.length; i++) {
                let element = names[i];
                if(element.length % 2 != 0){
                    oddName = element;
                    return oddName;
                }
            }
      }
  }
  





  
// Problem 1 :
 function anaToVori(ana){
    if(typeof ana == 'number' && ana > 1){
        let Vori = ana / 16 ;
        return Vori;
    }
    else{
        let error = 'please, type a positive number value';
        return error;
    }
 }

// Problem 2 :
     function pandaCost(singgara,somucha,jilapi){
     
     if((typeof singgara == 'number' && singgara > 0) && (typeof somucha == 'number' && somucha > 0) && (typeof jilapi == 'number' && jilapi > 0)){

        let singgaraQuantity = 7 ;
        let somuchaQuantity = 10 ;
        let jilapiQuantity = 15 ;
        
        let totalSinggaraQuantity = singgara * 7 ;
        let totalSomuchaQuantity = somucha * 10 ;
        let totalJilapiQuantity = jilapi * 15 ;
        
        let totalTaka = totalSinggaraQuantity + totalSomuchaQuantity + totalJilapiQuantity ;
        return totalTaka ;
     
     }
     else{
         let msg = "write the positive number !"
         return msg;
     }    
 }

// Problem 3 :
 function picnicBudget(peoples){
     
    if(typeof peoples != 'number' || peoples < 1){
        let text = "Hey, please code the positive value !"
        return text;
    }
     if(peoples <= 100 || peoples < 100){
         firstPeopleCount = peoples * 5000 ;
         return firstPeopleCount;
     }
     else if(peoples <= 200 || peoples < 200){
         firstPeopleCount = 100 * 5000 ;
               remainValue = peoples - 100 ;
         secondPeopleCount = remainValue * 4000 ;
            totalPeopleTaka = firstPeopleCount + secondPeopleCount ;
            return totalPeopleTaka ;
     }
     else{
         firstPeopleCount = 100 * 5000 ;
         secondPeopleCount = 100 * 4000 ;
               remainValue = peoples - 200 ;
          thirdPeopleCount = remainValue * 3000 ;
                 totalTaka = firstPeopleCount + secondPeopleCount + thirdPeopleCount ;
                return totalTaka ;
     }
 }

 // Problem 4 :
 function oddFriend(names){
      for(i = 0; i < names.length; i++){
            element = names[i];
            if(typeof element != 'string'){
                let msg = 'please write string value !';
                return msg;
            }
            for (let i = 0; i < names.length; i++) {
                let element = names[i];
                if(element.length % 2 != 0){
                    oddName = element;
                    return oddName;
                }
            }
      }
  }
var result = oddFriend(['rita','eva','nafisha','eva']);
console.log(result);