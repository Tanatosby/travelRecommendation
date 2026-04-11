
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
    let s = data[key];
    s.forEach(element => {
        console.log(element.name);
    });
    })
    .catch(error=>{
    console.log('Error:',error);
    });
}

document.getElementById('search_button').addEventListener('click',Searchfunc)