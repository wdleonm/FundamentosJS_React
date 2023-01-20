//unir dos objetos
const producto = {
    nombre: "Tablet", 
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Williams Leon",
    premium : true
}

//const nuevoObjeto = Object.assign(producto,cliente) // de esta forma une los objetos pero con los campos iguales se mantiene es el del ultimo
const nuevoObjeto2 = {
    producto: {...producto},
    cliente: {...cliente}
}
console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)

// Segunda parte video 15