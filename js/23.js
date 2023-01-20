// manipular HTML con JS

const heading = document.querySelector('.heading')
heading.textContent ='Un nuevo Heading'
console.log(heading.textContent)

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un valor por defecto'
console.log(inputNombre)

const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach(enlace => enlace.textContent = 'Nuevo Enlace')

// **** Segunda parte video 34 manipular HTML con JS