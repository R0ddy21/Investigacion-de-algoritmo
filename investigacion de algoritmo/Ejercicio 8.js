// 8. Leer un carácter y deducir si está o no comprendido entre las letras a y z ambas inclusive 
// y sino verificar si es un signo de puntuacion ", . ; :" y si no presentar solo el carácter.

//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  caracter=" " (leer)
// Los calculos o procesos que se hacen con las variables
// Proceso: Si (caracter >= 'a' && caracter <= 'z')Entonces
//             escribir"El carácter está comprendido entre las letras a hasta la z."
//          Sino 
//          SI (caracter == "," || caracter == "." || caracter==";" || caracter==":"){
//                 escribir "El carácter es un signo de puntuación."
//          Sino
//                 escribir "El carácter ingresado es:", caracter
//          FinSi
// La informacion de las variables procesadas
// Salida:   escribir "gracias
const read = require('prompt-sync')();
const write = console.log

//LENGUAJE JAVASCRIPT

function caracter() {
    let caracter=" " 
    write("Ingrese un carácter:")
    caracter=(read())

    if (caracter >= 'a' && caracter <= 'z'){
        write("El carácter está comprendido entre las letras a hasta la z.")
    }else if (caracter == "," || caracter == "." || caracter==";" || caracter==":"){
        write("El carácter es un signo de puntuación.")
    }else{
        write("El carácter ingresado es:", caracter)
    }
}
caracter()