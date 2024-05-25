//14.	Dado una dirección cualquiera presentar la dirección, el primer carácter, el del medio y el ultimo de dicha dirección.
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:   direccion=" "(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso:          
//       direccion1=direccion
// La informacion de las variables procesadas
// Salida: Escribir "Primer caracter"," ",direccion1[0]
//         Escribir "Medio caracter", direccion1[direccion1.length / 2]
//         Escribir "Ultimo caracter"," ",direccion1[direccion1.length-1]
const read = require('prompt-sync')();
const write = console.log

//LENGUAJE JAVASCRIPT

function calle() {
    let direccion=" "
    write("ingrese una direccion ")
    direccion=(read())
    direccion1=direccion

        write("La direccion es: ",direccion1)
        write("Primer caracter"," ",direccion1[0])
        write("Medio caracter", direccion1[direccion1.length / 2])
        write("Ultimo caracter"," ",direccion1[direccion1.length-1])
}
    calle()
    