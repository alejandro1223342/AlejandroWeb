let message = document.querySelector('#message')
let pingButton = document.querySelector('#pingButton');

pingButton.addEventListener('click', getPingFromWebServices);

function getPingFromWebServices() {
    const url = 'http://localhost:3000/ping';

  fetch (url) 
    .then((response) => {
        return response.json()
    })

    .then((data)=> {
        console.log(data)
        message.innerHTML=data.message
    })
    .catch(function(error){
        console.log(error)
        message.innerHTML= `No se puede conectar al servidor ${url}`
    })
}
