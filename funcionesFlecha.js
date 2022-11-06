"use strict";
/* aprendiendo a manejar FUNCIONES FLECHA EN TYPESCRIPT */
/* OJO CON LA DECLARACION DE FUNCIONES Y VARIABLES porque detectas las declaraciones en el conjunto de archivos typescript */
/* funcion normal */
var suma3 = function (a, b) {
    return a + b;
};
console.log(suma3(4, 8));
/* FUNCION FLECHA */
var sumaFlecha = function (a, b) { return a + b; };
var multiplica = function (c, d) { return c * d; }; /* sintaxis de 1 sola linea en retorno funcion flecha */
console.log(sumaFlecha(10, 60));
console.log(multiplica(5, 2));
var devNombre = function () { return "hola soy fernando"; }; /* sintaxis de una linea de codigo funcion flecha */
