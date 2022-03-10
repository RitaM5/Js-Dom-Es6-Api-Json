function handleJustFunctionClick(){
    let clickingMethod = document.getElementById('clicking-method');
    clickingMethod.innerText = 'set by using function';
}
//direct
document.getElementById('handle-event').addEventListener('click', function(){
    let p = document.getElementById('clicking-method');
    p.innerText ='set by direct add event listener';
    //p.style.color ='green';
    p.setAttribute('style','color:green;')

})

//input ar vitor theke p k update kora and input ar p jokhn update hbe tokhn input a jate text ta na show kore.
document.getElementById('update-name').addEventListener('click', function(){
    //fst input k call korte hbe
    let nameField = document.getElementById('name-field');
    //abar p k
    let p = document.getElementById('clicking-method');
    p.innerText = nameField.value ;
    nameField.value=''; //ata dile p update houyar por input ar vitor text ta thakbena
})