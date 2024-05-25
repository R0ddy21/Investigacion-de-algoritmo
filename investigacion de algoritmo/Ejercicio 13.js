//13.	Dado 5 nombres almacenarlo en un arreglo y luego presentar 
//      cada nombre del arreglo desde el ultimo al primero sin usar ciclos.
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:   nombre1=" "(leer),nombre2=""(leer),nombre3=""(leer),nombre4=""(leer),nombre5=""(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso:  
//      nombre6=nombre1
//      nombre7=nombre2
//      nombre8=nombre3
//      nombre9=nombre4
//      nombre10=nombre5
// La informacion de las variables procesadas
// Salida: escribir "El quinto nombre",nombre10
//         escribir "El cuarto nombre",nombre9
//         escribir "El tercer nombre",nombre8
//         escribir"El segundo nombre",nombre7
//         escribir"El primero nombre",nombre6
const read = require('prompt-sync')();
const write = console.log

//LENGUAJE JAVASCRIPT

function nombres() {
    let nombre1=" ",nombre2="",nombre3="",nombre4="",nombre5=""
    write("ingrese el primer nombre")
    nombre1=(read())
    write("ingrese el segundo nombre")
    nombre2=(read())
    write("ingrese el tercer nombre")
    nombre3=(read())
    write("ingrese el cuarto nombre")
    nombre4=(read())
    write("ingrese el quinto nombre")
    nombre5=(read())
        nombre6=nombre1
        nombre7=nombre2
        nombre8=nombre3
        nombre9=nombre4
        nombre10=nombre5
        write("El quinto nombre",nombre10)
        write("El cuarto nombre",nombre9)
        write("El tercer nombre",nombre8)
        write("El segundo nombre",nombre7)
        write("El primero nombre",nombre6)
    }
    nombres()