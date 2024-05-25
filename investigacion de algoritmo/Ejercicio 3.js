// 3.	Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética.
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  numero1=0(leer),numero2=0(leer),numero3=0(leer),numero4=0(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso: //Producto de las variables
//               producto = numero4 * numero3 * numero2 * numero1
//          //Suma de las variables
//               suma = numero4 + numero3 + numero2 + numero1
//          //Media aritmetica
//               mediaAritmetica = suma/4
// La informacion de las variables procesadas
// Salida:     escribir "La suma de los números es: ",suma
//             escribir "El producto de los numeros es: ",producto
//             escribir "la media aritmetica de los números es: ",mediaAritmetica
   
const read = require('prompt-sync')();
const write = console.log

//LENGUAJE JAVASCRIPT

function variables(){
    let numero1=0,numero2=0,numero3=0,numero4=0
    write ("Ingrese el primer número:")
    numero1=parseFloat(read())
    write ("Ingrese el segundo número:")
    numero2=parseFloat(read())
    write("Ingrese el tercer número:")
    numero3=parseFloat(read())
    write("Ingrese el cuarto número:")
    numero4=parseFloat(read())
    //Producto de las variables
    producto = numero4 * numero3 * numero2 * numero1
    //Suma de las variables
    suma = numero4 + numero3 + numero2 + numero1
    //Media aritmetica
    mediaAritmetica = suma/4
    write("La suma de los números es: ",suma)
    write("El producto de los numeros es: ",producto)
    write("la media aritmetica de los números es: ",mediaAritmetica)
}
variables()
