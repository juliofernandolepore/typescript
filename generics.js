"use strict";
//Genericos o generics CON TYPESCRIPT
function saludar() { return "hola"; }
/* la <T> es un tipo generico que declara que va a ser cualquier tipo, por
convencion se usa la letra T, y tiene el efecto de que se fije un tipo de
dato para despues que no se le apliquen metodos de otro tipo */
console.log(saludar().floor);
console.log(saludar().lenght);
/* DECLARO UN ARREGLO QUE SOLO VA A ACEPTAR NUMEROS */
var arrayNumeros;
arrayNumeros = [23, 70, 45, 30, 70, 4, 60];
console.log(arrayNumeros[2]);
