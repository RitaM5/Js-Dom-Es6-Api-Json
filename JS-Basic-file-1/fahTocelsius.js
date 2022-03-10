function fahrenhiteToCelsius (fahrenhite){
    var fahToCel = ((fahrenhite - 32) * 5) / 9 ;
    var celsius = fahrenhite + '\xB0F is ' + fahToCel + '\xB0C .' ;
    return celsius ;
}
var result = fahrenhiteToCelsius(104);
console.log(result);