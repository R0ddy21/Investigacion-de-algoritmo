//11.	Dado un día en numero, presentar el nombre de ese día. Para la solución utilice arreglos.
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:   dia=0(leer),diasSemana = [6](proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso:   Si(dia>=0 && dia<=6)Entonces
//        diasSemana[0]="Domingo"
//        diasSemana[1]="Lunes"
//        diasSemana[2]="Martes"
//        diasSemana[3]="Miercoles"
//        diasSemana[4]="Jueves"
//        diasSemana[5]="Viernes"
//        diasSemana[6]="Sabado"
//             nombre = diasSemana[dia]
//             escribir "El día", dia, "La semana",nombre
//        sino
//        Escribir "Número de día inválido. Por favor, ingrese un número del 0 al 6."
//        FinSi
// La informacion de las variables procesadas
// Salida: escribir "gracias por consultar"
const read = require('prompt-sync')();
const write = console.log

//LENGUAJE JAVASCRIPT

function diaSemana() {
    let dia=0
    let diasSemana = [6]
    write("ingrese el dia de la semana")
    dia=parseFloat(read())
    if (dia>=0 && dia<=6){
        diasSemana[0]="Domingo"
        diasSemana[1]="Lunes"
        diasSemana[2]="Martes"
        diasSemana[3]="Miercoles"
        diasSemana[4]="Jueves"
        diasSemana[5]="Viernes"
        diasSemana[6]="Sabado"
        nombre = diasSemana[dia]
        write("El día", dia, "La semana",nombre)
    }else{
        write("Número de día inválido. Por favor, ingrese un número del 0 al 6.")
    }
        write("gracias por consultar")
    }
    diaSemana()
