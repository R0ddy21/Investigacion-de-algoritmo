//16.	Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el ultimo carácter de cada nombre desde el arreglo.
//cada nombre del arreglo desde el ultimo al primero sin usar ciclos.
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:   nombres1=" "(leer),nombres2=" "(leer),nombres3=" "(leer), nombre = [3](proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso:     nombre[0]=nombres1
//              nombre[1]=nombres2
//              nombre[2]=nombres3
// La informacion de las variables procesadas
// Salida: escribir ""El primer nombre es: ",nombre[0]"
//         escribir ""El ultimo nombre es: ",nombre[2]"

const read = require('prompt-sync')();
const write = console.log

//LENGUAJE JAVASCRIPT

function arreglodenombre() {
    let nombres1=" ",nombres2=" ",nombres3=" "
    write("ingrese el primer nombre")
    nombres1=(read())
    write("ingrese el segundo nombre")
    nombres2=(read())
    write("ingrese el tercer nombre")
    nombres3=(read())

    nombre5=nombres1
    nombre6=nombres2
    nombre7=nombres3

        write("El primer nombre es: ",nombre5," ","Primer caracter"," ",nombre5[0]," ","Ultimo caracter"," ",nombre5[nombre5.length-1])
        write("El ultimo nombre es: ",nombre7," ","Primer caracter"," ",nombre7[0]," ","Ultimo caracter"," ",nombre7[nombre7.length-1])
}
    arreglodenombre()