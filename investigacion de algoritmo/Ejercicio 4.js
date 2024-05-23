// 4.	Diseñar un algoritmo que lea el peso de un hombre en libras y nos devuelva su peso en kilogramos y gramos
//(nota: una libra equivale a 0.453593 kilogramos)
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  PesoLibras=0(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso: kilogramos = PesoLibras * 0.453593
//          gramos = kilogramos - (kilogramos * 1000)
// La informacion de las variables procesadas
// Salida:  escribir "El peso en kilogramos es: ",kilogramos,"kg"
//          escribir "El peso en gramos es: ",gramos,"g"
const read = require('prompt-sync')();
const write = console.log

//LENGUAJE JAVASCRIPT

function peso(){
    let PesoLibras=0
    write("Ingrese el peso:")
    PesoLibras=parseFloat(read())
    kilogramos = PesoLibras * 0.453593
    gramos = kilogramos - (kilogramos * 1000)
    write("El peso en kilogramos es: ",kilogramos,"kg")
    write("El peso en gramos es: ",gramos,"g")
}
peso()
