// **** Video 20 Funciones - Function Declaration

function sumar() {
    console.log(2 + 2 )
}
sumar()

// **** Segunda parte video 20 Funciones - Function Declaration



// **** Video 21 Funciones - Parametros y Parametros por default  
function sumarDos(numero = 0, numero2= 0) {
    console.log(numero )
    console.log(numero2 )
    console.log(numero + numero2 )
}
sumarDos(10, 20)
sumarDos(2, 3)
sumarDos(100, 400)
sumarDos(100)
sumarDos()

// lo que se declara dentro de la funcion son parámetros numero y numero2
// lo que se pasa al llamar la fucnión con argumentos 10, 20, 2, 2 etc 


// **** Segunda parte video 21 Funciones - Parametros y Parametros por default 



// **** Video 22 Funciones que retorna valores
// con esta funcón se retorna el arreglo
function sumarTres(numero = 0, numero2= 0) {
    return [numero + numero2, 'Hola Mundo' ]
}

const [resultado, holaMundo ] = sumarTres(20, 30)

console.log(resultado)
console.log(holaMundo)


// con esta funcón se retorna como un objeto 
function sumarCuatro(numero = 0, numero2= 0) {
    return {
        resultado2: numero + numero2, 
        mensaje: 'Hola Mundo 2' 
    }
}

const {resultado2, mensaje } = sumarCuatro(20, 30)

console.log(resultado2)
console.log(mensaje)


// **** Segunda parte video 22 Funciones que retorna valores