"use strict";
//aprendiendo funciones en typescript
//funciones declaradas
function miFuncion(saludo) {
    return saludo;
}
console.log(miFuncion("hola mundo"));
//funciones Expresadas
//esta es una FUNCION FLECHA guardada en una constante.
var expresada = function (parametro) { return parametro; };
console.log(expresada("hola"));
//otra sintaxis de funcion flecha
var expresada2 = function (parametro) {
    return parametro;
};
console.log(expresada2("hola"));
// esta es una funcion comun almacenada en constante
var despedida = function (despedida) {
    return "".concat(despedida);
};
console.log(despedida("adios"));
//FUNCION FLECHA
var suma = function (numero1, numero2) {
    var resultado = numero1 + numero2;
    return resultado;
};
console.log(suma(10, 30));
//funcion flecha con return string porque esta usando template strings
var suma2 = function (numero1, numero2) {
    var resultado = "".concat(numero1 + numero2);
    return resultado;
};
console.log(typeof suma2(80, 30));
//Parametros opcionales o Por defecto
//se usa un signo de interrogacion en el segundo parametro
function ejemplo(num1, num2) {
    return num1;
}
console.log(ejemplo(50));
//ahora una funcion con parametros por defecto
function ejemplo2(num1, num2) {
    if (num1 === void 0) { num1 = 100; }
    if (num2 === void 0) { num2 = 200; }
    return num1 + num2;
}
//el segundo parametro por defecto ya que solo coloque el primero
console.log(ejemplo2(50));
console.log(ejemplo2());
//REST OPERATOR ... pasando arrays por parametro
function animales() {
    var lista = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        lista[_i] = arguments[_i];
    }
    return lista;
}
console.log(animales("ave", "perro", "gato", "reptil", "monos"));
