let count = 0;
function add(){
    count++;
    control();
}
function minus(){
    count--;
    if(count>=0){
        control();
    }
}
function control(){
    document.getElementById('count').innerText = count;
}





/*let count = 0;
document.getElementById('add').addEventListener('click',function(){
  count = count + 1 ;
  document.getElementById('count').innerText = count;
});

document.getElementById('minus').addEventListener('click',function(){
    count = count - 1 ;
   if(count>0){
    document.getElementById('count').innerText = count;
   }
  })*/