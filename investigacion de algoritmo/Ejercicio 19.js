//19.	Dada una cadena presentar el primer carácter siempre y cuando sea una vocal
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  gradosCelsius=0(leer),gradosFahrenheit=0(proceso)
// Los calculos o procesos que se hacen con las variables
// Proceso:   SI (caracter=="a" || caracter=="e" || caracter=="i" || caracter=="o" || caracter=="u") {
//         escribir "es una vocal"
//         escribir "caracter"
//   Sino SI(caracter=="a" || caracter=="b" || caracter=="c" || caracter=="d" || caracter=="e"|| caracter=="f"
//   || caracter=="g"|| caracter=="h"|| caracter=="i"|| caracter=="j"|| caracter=="k"|| caracter=="l"|| caracter=="m"
//   || caracter=="o"|| caracter=="p"|| caracter=="q"|| caracter=="r"|| caracter=="s"|| caracter=="t"|| caracter=="u"
//   || caracter=="v"|| caracter=="w"|| caracter=="x"|| caracter=="y"|| caracter=="z") {
//    escribir "no es una vocal"
//   FinSi
// La informacion de las variables procesadas
// Salida: escribir("gracias")

const read = require('prompt-sync')();
const write = console.log

//LENGUAJE JAVASCRIPT

function verificarVocal() {
   let caracter = ""
   write("Ingrese una vocal:")
   caracter = (read())
   if (caracter=="a" || caracter=="e" || caracter=="i" || caracter=="o" || caracter=="u") {
      write( "es una vocal")
      write(caracter)
   } else if (caracter=="a" || caracter=="b" || caracter=="c" || caracter=="d" || caracter=="e"|| caracter=="f"
   || caracter=="g"|| caracter=="h"|| caracter=="i"|| caracter=="j"|| caracter=="k"|| caracter=="l"|| caracter=="m"
   || caracter=="o"|| caracter=="p"|| caracter=="q"|| caracter=="r"|| caracter=="s"|| caracter=="t"|| caracter=="u"
   || caracter=="v"|| caracter=="w"|| caracter=="x"|| caracter=="y"|| caracter=="z") {
      write("no es una vocal")
   }
}

verificarVocal();