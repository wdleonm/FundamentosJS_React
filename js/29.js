// Fetch API 

const url= "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = () => {
    fetch(url)
    .then( respuesta => respuesta.json())
    .then( resultado => {
        resultado.forEach(comentario => {
            console.log(comentario)    
        })
        
    })
}

consultarAPI()


/* usamos la página 
https://jsonplaceholder.typicode.com/
*/
// **** Segunda parte video 40 Fetch API y Promises