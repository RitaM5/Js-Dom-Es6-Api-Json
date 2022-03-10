const first ={ a : 1};
const second = { a : 1};
if(first == second){
    console.log('objects are equal');
}
else{
    console.log('objects are different');
}
//ans : output asbe (Objects are different). karon ader type data sob ak thakleo computer referential integirity ak noy,referance tai alada. jodi tripol equal(===) diye kori same asbe.
// abar jodi avabe kori
const first2 ={ a : 1};
const second2 = { a : 1};
const third = first2 ;
if(first2 === third){
    console.log('objects are equal');
}
else{
    console.log('objects are different');
}
//ans: abar output asbe (objects are equal). karon abar agei referance hoye gece computer memory Text.