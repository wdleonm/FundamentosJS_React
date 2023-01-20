// Template String

const producto = "Tablet 12 pulgadas"
const precio = 400
const marca = "Orange" 

function textoDeFuncion() {
    return "Este texto proviene de la función"
}

console.log(producto + " $" + precio + " Dolares, Marca: " + marca )

console.log(`${producto} $${precio} Dolares, Marca: ${marca}, ${textoDeFuncion()} `)

// **** Segunda parte video 43 Template String Fin de la introducción 