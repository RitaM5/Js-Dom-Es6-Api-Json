//34.5 module practice:
//problem-1
/* fetch('https://jsonplaceholder.typicode.com/comments')
.then(res => res.json())
.then(data => console.log(data)) */
//problem-2
/* const clickButton = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))
} */
//problem-3
/* const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayData(data))
}
loadData();
const displayData = details => {
    //console.log(details);
    const inputValue = document.getElementById('input-value');
    for(const detail of details){
        //console.log(detail);
        const h2 = document.createElement('h2');
        h2.innerText =` ${detail.name}
        `
        const h5 =document.createElement('h5');
        h5.innerText =`
        ${detail.email}`
        inputValue.appendChild(h2);
        inputValue.appendChild(h5);
    }
} */

//problem-4
/* const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayData(data))
}
loadData();
const displayData = details => {
    //console.log(details);
    const inputValue = document.getElementById('input-value');
    details.forEach(detail => {
           //console.log(detail);
           const h2 = document.createElement('h2');
           h2.innerText =` ${detail.name}
           `
           const h5 =document.createElement('h5');
           h5.innerText =`
           ${detail.email}`
           inputValue.appendChild(h2);
           inputValue.appendChild(h5);
    });
}   */   

//poblem-5
 /*const clickButton = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)//ata simple api.
    .then(res => res.json())
    .then(data => displayData(data))
}
const displayData = details => {
    //console.log(details); 
     const inputValue = document.getElementById('input-value');
    for(const detail of details){
        //console.log(detail);
        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.innerHTML = `
        <div onclick="loadDetails(${detail.id})">
        <h2>${detail.name}</h2>
        <h5> ${detail.email}</h5> 
        </div> 
        `;
        inputValue.appendChild(div);
    }
}

const loadDetails = infoId => {
    const url = `https://jsonplaceholder.typicode.com/comments/${infoId}`; //ai vabe call korake dyanamic api bole
    fetch(url)
    .then(res => res.json())
    .then(data => DisplayIdDetails(data.id));
}
const DisplayIdDetails = id => {
    const inputValue = document.getElementById('input-value');
    inputValue.innerHTML = `<h4>id : ${id}</h4>`;
}*/

//problem-6
//random user api search
 /*  const clickButton = () => {
    fetch('https://randomuser.me/api/?results')
    .then(res => res.json())
    .then(data => displayShows(data.results));
}
const displayShows = (informations) => {
   // console.log(informations); 
    const inputValue = document.getElementById('input-value');
    const input = inputValue.innerText;
    inputValue.innerText ='';
    for(const detail of informations){
       // console.log(detail);
            const div = document.createElement('div');
            div.classList.add('col-lg-4');
            div.innerHTML = `
            <div>
            <img src='${detail.picture.large}'/>
             <h2>country :${detail.location.country}</h2>
             <h4>city :${detail.location.city}</h4>
             <h5>name:${detail.location.street.name} number:${detail.location.street.number}</h5>
             <h5>latitude:${detail.location.coordinates.latitude}
             longitude_${detail.location.coordinates.longitude}
             </h5>
             <h6>country:${detail.location.country} postcode:${detail.location.postcode} state:${detail.location.state}</h6>
             <h6>timezone: description_${detail.location.timezone.description} offset_${detail.location.timezone.offset}</h6>
            </div> 
            `;
            inputValue.appendChild(div);
           

    }
    
}*/
//8,9 baki thaklo
