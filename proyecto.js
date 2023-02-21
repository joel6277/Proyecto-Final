//Variables utiles 
//Precio base de la cotización, en quetzales
const precio_base = 2000

//Valores de los recargos 
const edad_18 = 0.1 // 10%
const edad_25 = 0.2 // 20%
const edad_50 = 0.3 // 30%

const casado_18 = 0.1 // 10%
const casado_25 = 0.2 // 20%
const casado_50 = 0.3 // 30%

const hijos_recargo = 0.2 // 20%


//Recargo
var recargo = 0
var recargo_total = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

var casado = prompt("¿Está casado actualmente?")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if ("SI" == casado.toUpperCase()) {
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if ("SI" == casado.toUpperCase()) {
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas?")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos
/**
 * 1. convierta la cantidad de hijos a numero
 */

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if (edad_numero >= 18 && edad_numero < 25) {
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = precio_base + recargo
}
else if (edad_numero > 25 && edad_numero <= 49) {
  recargo = precio_base * edad_25
  recargo_total = precio_base + recargo
}
else (edad_numero >= 50); {
  recargo = precio_base * edad_50
  recargo_total = precio_base + recargo
}

//aqui puede colocar un else if() con el siguiente rango

/** 
 * 2. Recargo por la edad del conyuge
 */
if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * casado_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = precio_base + recargo
}
else if (edad_conyuge_numero > 25 && edad_conyuge_numero <= 49) {
  recargo = precio_base * casado_25
  recargo_total = precio_base + recargo
}
else (edad_conyuge_numero >= 50); {
  recargo = precio_base * casado_50
  recargo_total = precio_base + recargo
}


/**
 * 3. Recargo por la cantidad de hijos 
 */

var precio_hijos = cantidad_hijos * precio_base



precio_final = precio_base + recargo_total
//Resultado
alert("Para el asegurado " + nombre)
alert("El recargo total sera de: " + recargo_total)
alert("El precio sera de: " + precio_final)