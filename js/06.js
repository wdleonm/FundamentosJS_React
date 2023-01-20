// Objetos - Destructuring con 2 o más objetos

const producto = {
    nombre: "Tablet", 
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Williams Leon",
    premium : true
}

const { nombre, precio, disponible } = producto
const { nombre: nombreCliente, premium } = cliente

console.log(nombre, precio, disponible)
console.log(nombreCliente, premium)

//Segunda parte video 15 unir dos o mas Objetos
//  subiendo con Vs code