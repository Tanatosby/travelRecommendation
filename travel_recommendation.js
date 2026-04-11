
function Searchfunc(){
    const searching_keyword = document.getElementById('search_box').value.trim().toLowerCase();
    if (searching_keyword == 'beach'|| searching_keyword == 'beaches'){
        display('beaches')
    }else if(searching_keyword == 'country'|| searching_keyword == 'countries'){
        display('countries')
    }else if(searching_keyword == 'temple'|| searching_keyword == 'temples'){
        display('temples')
    }else{
        window.alert('You can looking for beaches, temples or countries')
    }
}

function display(key){
     fetch('travel_recommendation_api.json')
    .then(response=>response.json())
    .then(data=>{
    const divresults = document.getElementById('results');
    divresults.innerHTML = "";
    let s = data[key];
    if(key == 'countries'){
        s.forEach(element => {
        showSearching(element,true);
        });
    } else{
        s.forEach(element => {
        showSearching(element,false);
        });
    }
    })
    .catch(error=>{
    console.log('Error:',error);
    });
}



function showSearching(element,b){
    const divContainerResults = document.getElementById('results_container')
    const divContainerBooking = document.getElementById('booking')
    divContainerBooking.style.display = 'none'
    divContainerResults.classList.remove('hidden')
    divContainerResults.classList.add('view')
    const divresults = document.getElementById('results')
    const results = document.createElement('div')
    if(!b){
    results.innerHTML = `
    <div class= "result">
        <img class= "image_result" src= ${element.imageUrl} alt = 'img_result'>
        <h1 class = "name_result">${element.name}</h1>
        <p class = "description_result">${element.description}</p>
    </div>
    `}else {
        results.innerHTML = `
        <div class= "result">
            <img class= 'image_result' src= ${element.cities[0].imageUrl} alt = "img_result">
            <h1 class = "name_result">${element.name}</h1>
            <p class = "description_result">${element.cities[0].description}</p>
        </div>`
        }
    
    divresults.appendChild(results);

}

function clearAll(){
const divresults = document.getElementById('results')
divresults.innerHTML = "";
}


document.getElementById('search_button').addEventListener('click',Searchfunc);

document.getElementById('clear_button').addEventListener('click',clearAll);