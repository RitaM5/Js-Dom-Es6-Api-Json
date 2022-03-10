//object of array type
//deck of cards API search
//btn event handler setup
 

const searchButton = () => {
    //console.log('button setup');
    const inputValue= document.getElementById('input-value');
    const error = document.getElementById('error');

    const input = inputValue.value ;
    //console.log(input);
    if(isNaN(input)||input==''){
         error.innerText='please give a number';
         inputValue.value = '';
         main.innerHTML=''; // error
    }
    else if(input <= 0){
        error.innerText = 'please give a positive number'
        inputValue.value ='';
        main.innerHTML = '';//error
    }
    else{
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${input}`)
    .then(res => res.json())
    .then(data => cardDisplay(data.cards))//object of array hole ata check korte hobe kon object ar vitor array ace and (data) ar sathe add korte hbe.
    inputValue.value = '';
    error.innerHTML = '';
    main.innerHTML = '';//error
    }
}

const main = document.getElementById('main');

const cardDisplay = (cards) =>{
    console.log(cards);
    for(const card of cards){
       //console.log(card);
       const div = document.createElement('div');
       div.classList.add('col-lg-4');
       div.innerHTML= `
       <div class="card" style="width: 18rem;">
          <img src="${card.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${card.suit}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
       </div>
       `;
       main.appendChild(div);
       
    }
}