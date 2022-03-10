function celsiusToFahrenheit(celsius){
        var cToFah =((celsius * 9) / 5) + 32 ;
        var fahrenhite = celsius + '\xB0C is ' + cToFah + '\xB0F.';
        return fahrenhite;
}
var result = celsiusToFahrenheit(30);
console.log(result);
var result = celsiusToFahrenheit(120);
console.log(result);