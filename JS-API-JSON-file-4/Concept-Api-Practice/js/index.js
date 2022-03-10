//now array of object type
//the dog API search
const loadDog = () =>{
    fetch(`https://api.thedogapi.com/v1/breeds`)
    .then(res => res.json())
    .then(data => displayDog(data))//array ar vitore object a (data) te kicu add korte hoyna.
}
const displayDog= dogList => {
     //console.log(dogList);
     const mainContent = document.getElementById('main');
      //console.log(mainContent);
     const firstData = dogList.slice(0,10);
     //console.log(firstData);  
     for(const dog of firstData){
         //console.log(dog);
         const div = document.createElement('div');
         div.classList.add('col-lg-4');
          div.innerHTML = `
         <h2>${dog.name}</h2>
         <h4>${dog.weight.imperial}</h4>
         <img width='400px' height='250px'src="${dog.image.url}"/>
         <p>${dog.temperament}</p>
         `
         mainContent.appendChild(div); 
     }
}



