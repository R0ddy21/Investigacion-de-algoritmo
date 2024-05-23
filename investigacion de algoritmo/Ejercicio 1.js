// 1.	Algoritmo que transforme de grados Celsius a Fahrenheit
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  gradosCelsius=0(leer),gradosFahrenheit=0(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso: gradosFahrenheit = 32 + (gradosCelsius * 9/5)
// La informacion de las variables procesadas
// Salida: "La temperatura en grados fahrenheit es:"," ",gradosFahrenheit
const read = require('prompt-sync')();
const write = console.log

//LENGUAJE JAVASCRIPT

function temperatura(){
let gradosCelsius=0,gradosFahrenheit=0
write ("Ingrese la temperatura en grados celsius:")
gradosCelsius =parseInt(read())
gradosFahrenheit = 32 + (gradosCelsius * 9/5)
write ("La temperatura en grados fahrenheit es: ",gradosFahrenheit,"°C")
}
//se le llama o se ejecuta la funcion 
temperatura()
