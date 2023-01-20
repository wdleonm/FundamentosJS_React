// operaciones en los arreglos

const tecnologias = ['HTML','CSS', 'JavaScript', 'React', 'Node.js']

// Añadir elementos al array
// tecnologias.push('GraphQL') // Añadae al final del Array
// tecnologias.unshift('GraphQL') // Añadae al inicio del Array

//const nuevoArreglo= [...tecnologias, 'GraphQL'] // agrega al final del arreglo sin modificar el original
//const nuevoArreglo= ['GraphQL', ...tecnologias ] // agrega al inicio del arreglo sin modificar el original

// Eliminar elementos al array
// tecnologias.pop() // elimina elementos el final del arreglo
// tecnologias.shift() // elimina del inicio del arreglo
tecnologias.splice(2,1) // el primer numero es a partir de y el segundo cuantos elimina 

// const nuevoArray=tecnologias.filter( function(tech) {
//     return tech !== 'HTML' // !== diferente,  === igual a 
// })

// Reemplazar elementos del array


const nuevoArray = tecnologias.map ( function(tech) {
    if (tech === 'HTML') {
        return 'GraphQL'
    }else {
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArray)

// Segunda parte video 17 manipulacion de arrays