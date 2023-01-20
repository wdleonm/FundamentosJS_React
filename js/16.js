// **** video 26 Otros Array Methods Utiles
const tecnologias = ['HTML','CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 20, 30]

let nuevoArray;

//Filter
nuevoArray = tecnologias.filter( tech =>  tech !== 'React' )

// comprobar si un elemento existe en el array
// const resultado = tecnologias.includes('GrapQL')

// Some = Devulve si al menos uno cumple la condición true o false 
// const resultado = numeros.some(numero => numero > 15 )

// Find = Devulve el primer elemento que cumple la condición 
//const resultado = numeros.find(numero => numero > 25 )

// Every = Retorna true o false si todos cumplen la condición 
// const resultado = numeros.every(numero => numero > 9 )

// Reduce = acumula en el total
// const resultado = numeros.reduce( (total, numero) => numero + total, 0)

// Filter = crea un nuevo array en base a una condición 
const resultado = tecnologias.filter( tech => tech === 'Node.js' )
// const resultado2 = numeros.filter( numero => numero  > 15 )


// forEach 
//tecnologias.forEach( tech => console.log(tech))
tecnologias.forEach( (tech, index) => console.log(index))

// map - Permite crear un nuevo array 
const arrayMap = tecnologias.map(tech => tech)
    
console.log(resultado)

// console.table(tecnologias)
console.log(arrayMap)


// para ver los metodos que mutan o no consukta esta página https://doesitmutate.xyz/


// **** Segunda parte video 26 Otros Array Methods Utiles