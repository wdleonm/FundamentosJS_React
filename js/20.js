
const autenticado = true

/*
 cuando se usa u ternario lo que esta a la derecha del signi ? y antes de los dos puntos 
 es lo que se cumple si es tru y lo que esta después de los dos puntos 
 es lo que se cumple si es false 
 autenticado ?   :
*/
autenticado ? 
    console.log('usuario autenticado') :  
    console.log('No autenticado, dirigie hacia login')

// Doble ternario
const saldo = 600
const pagar = 800
const tarjeta = false

saldo > pagar ? 
    console.log('Puedes pagar con saldo') : 
    tarjeta ?
        console.log('Pueds pagar con Tarjeta') :
        console.log('No, no puedes pagar')


// **** Segunda parte video 30  Condicionales Ternarios