// Objetos

// const nombre = "Tablet"
// const Precio = 300
// const disponible = true

const producto = {
    nombre: "Tablet", 
    precio: 300,
    disponible: true
}
console.log(producto)
console.table(producto)
console.log(producto.nombre)

//Destructuring
const { nombre, precio, disponible} = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

//Object Literal Enhacement
const autenticado = true
const usuario = "williams"

const nuevoObjeto = {
    autenticado: autenticado,
    usuario: usuario
}
console.table(nuevoObjeto)

const nuevoObjeto2 = {
    autenticado,
    usuario
}
console.table(nuevoObjeto2)