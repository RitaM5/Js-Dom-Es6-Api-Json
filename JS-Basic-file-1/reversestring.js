var myString = 'hello, how are you';

function reverseString(text){
    let reverse = "";
    for(const letter of text){
        console.log(letter);
        reverse = letter + reverse; //text reverse korte atai law
   }
    return reverse ;
}
var result = reverseString(myString);
console.log(result);