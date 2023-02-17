   {
    fetch('https://randomuser.me/api/')
    .then(respuesta => respuesta.json())
    .then(json => console.log(json))
   }