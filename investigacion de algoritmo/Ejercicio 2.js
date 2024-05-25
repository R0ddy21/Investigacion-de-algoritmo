//2. Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del número.  
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: numero1=0(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso:  resultado1= numero1 * 2
//           resultado2= numero1 * 3
// La informacion de las variables procesadas
// Salida:  escribir "El doble del numero ingresado es:",resultado1
//          escribir "El triple del numero ingresado es:",resultado2

const read = require('prompt-sync')();
const write = console.log

//LENGUAJE JAVASCRIPT

function DobleYtriple(){
    let numero1=0
    write ("Ingrese un numero:")
    numero1=parseFloat(read())
    resultado1= numero1 * 2
    resultado2= numero1 * 3
    write("El doble del numero ingresado es:",resultado1)
    write("El triple del numero ingresado es:",resultado2)
}
// se llama o se ejecuta la funcion
DobleYtriple()
