document.getElementById('add-border').addEventListener('click', function(){

    document.getElementById('friend-container').style.border='3px solid yellow';
});
//frnd div k background deyar jonne
function addBackground(){
   const friends = document.getElementsByClassName('friend');
   for(const friend of friends){
       friend.style.backgroundColor = 'hotpink';
   }
};
//content a frnd div add krar jnne
function addFriend(){
   const friendContent = document.getElementById('content');
   const friendDiv = document.createElement('div');
   friendDiv.classList.add('friend');
   friendDiv.innerHTML = `
   <h3 class='friend-name'>Friend-5</h3>
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat illo unde voluptatibus, aliquam voluptatem doloremque temporibus, officiis ipsa aliquid nisi laudantium labore quam consequatur, similique at accusamus dicta tempora non!</p>
   `;
   friendContent.appendChild(friendDiv);
};

//btn remove korar jonne
/*function removeButton(){
    const removeFriend = document.getElementsByClassName('friend');
    for(const remove of removeFriend){
        remove.style.display='none';
    }
};*/
const friendContainer = document.getElementById('content');
    document.getElementById('remove-btn').addEventListener('click', function(event){
        const friends = friendContainer.children
        if(friends){
            //friends[0].remove();//fst theke remove korar jonno
            friends[friends.length-1].remove();//last theke remove korar jonne
        } 
    })




//div click korle bg asbe
/*const addClickBackground = document.getElementsByClassName('friend');
for(const clickBackground of addClickBackground){
    clickBackground.addEventListener('click',function(){
        clickBackground.style.backgroundColor='lightblue';
    })
}*/

document.getElementById('content').addEventListener('click',function(e){
    //e.target.style.backgroundColor='red';
    if(e.target.className.toLowerCase()=='friend'){
        e.target.style.backgroundColor='lightblue';
    }
    else{
        e.target.style.backgroundColor='lightblue';
    }
})