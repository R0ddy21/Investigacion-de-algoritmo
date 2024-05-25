// 10.	El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200,
// Se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares.
// Presentar el valor de cada traje con su respectivo valor, descuento y pago considerando el iva del 15%.

//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  trajes=0(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso: Si(trajes>=200)Entonces
//              Escribir "Los trajes que tienen un precio superior a 200 se les aplicará un descuento del 10%"
//              descuento = trajes * 0.10
//          sino
//              Escribir "Los trajes que tienen menos de 200 se les aplicara un pago de $10 dolares "
//              descuento = 10
//          FinSi
//          descuento1= trajes - descuento
//          total = trajes + (descuento1 * 0.15)
// La informacion de las variables procesadas
// Salida:  Escribir "cada traje cuesta ","$",trajes
//          Escribir "el descuento es: ",descuento,"%"
//          escribir "El total de los trajes con el iva:","$",total

const read = require('prompt-sync')();
const write = console.log

//LENGUAJE JAVASCRIPT
function amazon(){
    let trajes=0
    write("ingrese el total de la compra ")
    trajes=parseInt(read())
    if (trajes>=200){
      write("Los trajes que tienen un precio superior a 200 se les aplicará un descuento del 10%")
      descuento = trajes * 0.10

    }else{
      write("Los trajes que tienen menos de 200 se les aplicara un pago de $10 dolares ")
      descuento = 10
    }
    descuento1= trajes - descuento
    total = trajes + (descuento1 * 0.15)
    write("cada traje cuesta ","$",trajes)
    write("el descuento es: ",descuento,"%")
    write("El total de los trajes con el iva:","$",total)
    

  }
  amazon()