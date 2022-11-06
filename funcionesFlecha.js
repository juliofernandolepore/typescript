"use strict";
/* aprendiendo a manejar FUNCIONES FLECHA EN TYPESCRIPT */
/* OJO CON LA DECLARACION DE FUNCIONES Y VARIABLES porque detectas las declaraciones en el conjunto de archivos typescript */
/* funcion normal */
let suma3 = function (a, b) {
    return a + b;
};
console.log(suma3(4, 8));
/* FUNCION FLECHA */
let sumaFlecha = (a, b) => { return a + b; };
let multiplica = (c, d) => c * d; /* sintaxis de 1 sola linea en retorno funcion flecha */
console.log(sumaFlecha(10, 60));
console.log(multiplica(5, 2));
let devNombre = () => "hola soy fernando"; /* sintaxis de una linea de codigo funcion flecha */
