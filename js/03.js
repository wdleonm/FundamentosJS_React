// tipos de datos

// Undefine
// let cliente
// console.log(cliente)
// console.log(typeof cliente)

// Boolean 
// const  descuento = true
// console.log(descuento)
// console.log(typeof descuento)

// // Number
// const numero1 = 20.20
// const numero2 = 30
// const numero3 = -100
// console.log(typeof numero1)
// console.log(typeof numero2)
// console.log(typeof numero3)

// // String o Cadenas de Texto
// const alumno = "Williams"
// let producto = "Monitor 20pulgadas"
// console.log(typeof alumno)
// console.log(typeof producto)

// BigInt
const numeroGrande = BigInt(1215345151454534534544534 )
console.log(typeof numeroGrande)

const numero = 10
const numero2 = 20

console.log(numero + numero2)

// coercion, es cuando modificas el tipo de 
// datos en una constante o variable para forzar 

// SYmbol
const primerSymbol = Symbol(30)
const segundoSymbol = Symbol(30)
console.log(primerSymbol === segundoSymbol) // se hace una comparación estricta 
console.log (primerSymbol.valueOf())
console.log (segundoSymbol.valueOf())

//Null 
const descuento = null
console.log(typeof descuento)
