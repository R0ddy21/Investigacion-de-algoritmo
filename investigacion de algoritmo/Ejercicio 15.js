//15.Almacenar 5 valores aleatorios en un arreglo e imprimir el primero valor 
//si es par positivo y el ultimo si es impar negativo.
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: valor=0(aleatorio)
// Los calculos o procesos que se hacen con las variables
// Proceso: numeros.push(parseInt(Math.random() * 100))
//    numeros.push(parseInt(Math.random() * 100))
//    numeros.push(parseInt(Math.random() * 100))
//    numeros.push(parseInt(Math.random() * 100))
//    numeros.push(parseInt(Math.random() * 100))
//    Si(valor%2==0)Entonces
//       escribir "El primer numero es par: ",valor
//    Sino
//       Escribir "El primer numero es impar: ",valor
//    FinSi
//    si (valor>0)Entonces
//       Escribir "El primer numero es positivo: ",valor
//    Sino
//       Escribir "El primer numero es negativo ",valor
//    FinSi
//    si(valor5%2==0 )Entonces
//       escribir"El ultimo numero es par  ",valor5
//    sino
//       escribir"El ultimo numero es impar  ",valor5
//    FinSi
//    Si(valor5>0)Entonces
//       escribir"El ultimo numero es positivo: ",valor5
//    Sino
//       escribir "El ultimo numero es negativo ",valor5 
//    FinSi
// La informacion de las variables procesadas
// Salida: Escribir "gracias"
const read = require('prompt-sync')()
const write = console.log

//LENGUAJE JAVASCRIPT
function valorAleatorio(){
    let valor=[]
    valor= parseInt(Math.random()*100) 
    valor2= parseInt(Math.random()*100) 
    valor3= parseInt(Math.random()*100) 
    valor4= parseInt(Math.random()*100) 
    valor5= parseInt(Math.random()*100) 
    write(valor)
    write(valor2)
    write(valor3)
    write(valor4)
    write(valor5)
    if (valor%2==0){
        write("El primer numero es par: ",valor)
    }else {
        write("El primer numero es impar: ",valor) 
    } 
    if (valor>0){
        write("El primer numero es positivo: ",valor)
    }else {
    write("El primer numero es negativo ",valor) 
    }
    if(valor5%2==0 ){
        write("El ultimo numero es par  ",valor5)
    }else{
    write("El ultimo numero es impar  ",valor5)
    }
    if (valor5>0){
        write("El ultimo numero es positivo: ",valor5)
    }else {
    write("El ultimo numero es negativo ",valor5) 
    }
    write("gracias")
}
valorAleatorio()