//20. Dada una cadena presentar el carácter de en medio, siempre y cuando sea un caracte de puntuación: “;” | “:” | “.” | “,”
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: cadena1=" "(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso:  medio = cadena1.charAt(cadena1.length / 2)
//                  Si (medio == ";:.,") Entonces
//                  escribir "El caracter de Medio es un signo de puntuacion"
//                  escribir medio
//           Sino
//                 escriir "El caracter de en medio no es un signo de puntuacion"
//                 escribir medio
//           FinSi
// La informacion de las variables procesadas
// Salida:  escribir "gracias por ingresar"

const read = require('prompt-sync')();
const write = console.log

//LENGUAJE JAVASCRIPT

function cadena(){
    let cadena1=" "
    write("ingrese algo para la cadena")
    cadena1=(read())
    medio = cadena1.charAt(cadena1.length / 2)
    if (medio == ";:.,"){
        write("El caracter de Medio es un signo de puntuacion")
        write(medio)
     } else {
        write ("El caracter de en medio no es un signo de puntuacion")
        write(medio)
     }
     write("gracias por ingresar")

}
// se llama o se ejecuta la funcion
cadena()
