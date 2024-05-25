//12.	Dado un mes en número, presentar el nombre de ese mes. Para la solución utilice arreglos.
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:   dia=0(leer), Mes= [12](proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso:   Si (numero>=0 && numero<=12)Entonces
//        Mes[0]="Enero"
//        Mes[1]="Febrero"
//        Mes[2]="Marzo"
//        Mes[3]="Abril"
//        Mes[4]="Mayo"
//        Mes[5]="Junio"
//        Mes[6]="Julio"
//        Mes[7]="Agosto"
//        Mes[8]="Septiembre"
//        Mes[9]="Octubre"
//        Mes[10]="Noviembre"
//        Mes[11]="Diciembre"
//        nombre = Mes[numero]
//        Escribir "El día", numero, "La semana",nombre
//     Sino
//        Escribir "Número de día inválido. Por favor, ingrese un número del 0 al 12."
//     FinSi
// La informacion de las variables procesadas
// Salida: escribir "gracias por consultar"
const read = require('prompt-sync')();
const write = console.log

//LENGUAJE JAVASCRIPT

function Meses() {
    let numero=0
    let Mes = [12]
    write("ingrese un numero para saber el Mes")
    numero=parseFloat(read())
    if (numero>=0 && numero<=12){
        Mes[0]="Enero"
        Mes[1]="Febrero"
        Mes[2]="Marzo"
        Mes[3]="Abril"
        Mes[4]="Mayo"
        Mes[5]="Junio"
        Mes[6]="Julio"
        Mes[7]="Agosto"
        Mes[8]="Septiembre"
        Mes[9]="Octubre"
        Mes[10]="Noviembre"
        Mes[11]="Diciembre"
        nombre = Mes[numero]
        write("El mes en numero", numero, "Mes",nombre)
    }else{
        write("Número de día inválido. Por favor, ingrese un número del 0 al 11.")
    }
        write("gracias por consultar")
    }
    Meses()