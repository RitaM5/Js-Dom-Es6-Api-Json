let names = ['abdul','kader','mader','abdul','jader','kader','abdul','pader'];
/*const khamba = [];
for(i = 0; i < names.length; i++){
    const element = names [i];
    console.log(element);
    if(khamba.indexOf(element) == -1){
        khamba.push(element);
    }
}*/
//valobasa mane kebol odhikar noy,akta mukto akash

function duplicateRemove(name){
    let khamba = [];
    for(const element of name){
        
        if(khamba.indexOf(element) == -1){
            khamba.push(element);
        }
    }
    return khamba;
}
var result = duplicateRemove(names);
console.log(result);