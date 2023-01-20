// Fetch API Async Await

const url= "https://jsonplaceholder.typicode.com/comments"


const consultarAPI =  async () => {
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    resultado.forEach(comentario => {
        console.log(comentario)       
    })
}

consultarAPI()

// **** Segunda parte video 41 Fetch API Async Await