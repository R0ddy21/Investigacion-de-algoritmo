//22.	Dado dos nombres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo
//BOSQUEJO
// Analisis de requerimentos:
// Entrada: nombre1=""(leer), nombre2=""(leer)
// los datos o variables del problema
// Proceso: Si (nombre1 === nombre2) entonces
//       comparacion="iguales"
//    sino si (nombre1 > nombre2) entonces
//       escribir"el primer nombre es mayor"
//    sino
//       escribir"el segundo nombre es mayor"
//    FinSi
// Los calculos o procesos que se hacen con las variables
// Salida: escribir("gracias por ingresar")


const read = require('prompt-sync')();
const write = console.log;

//LENGUAJE JAVASCRIPT

function compararNombres() {
   let nombre1 = "", nombre2 = ""
   write("Ingrese el primer nombre:")
   nombre1 = read();
   write("Ingrese el segundo nombre:")
   nombre2 = read();
   if (nombre1 === nombre2) {
      write("Son iguales")
   } else if (nombre1 > nombre2) {
      write ("el primer nombre es mayor")
   } else {
      write("el segundo nombre es mayor")
   }
   write("gracias por ingresar")
}

compararNombres()