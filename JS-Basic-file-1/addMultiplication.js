function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
    var perChairWood = 3;
    var parTableWood = 10;
    var parBedWood = 50;
    //wood calculation
    let chairWoodQuantity = chairQuantity * perChairWood ;
    let tableWoodQuantity = tableQuantity * parTableWood ;
    let bedWoodQuantity = bedQuantity * parBedWood ;
    //total wood
    var totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity ;
    return totalWood;
}
var result = woodCalculator(1,0,1);
console.log(result);