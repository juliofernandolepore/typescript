"use strict";
/* APRENDIENDO A USAR DECORADORES , se utiliza el simbolo de arroba  @  */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* agregan funcionalidad a la clase que pretendemos decorar, el decorador se puede tambien aplicar a METODOS Y ATRIBUTOS o PROPIEDADES DE LA CLASE */
/* TARJET: es lo que queremos que se ejecute */
function saludar(tarjet) {
    tarjet.prototype.saludos = function () {
        console.log("hola desde decoradores");
    };
}
/* ahora procedemos a decorar la clase */
let Hola = class Hola {
    constructor() {
    }
};
Hola = __decorate([
    saludar
], Hola);
/* ahora declaro una instancia de la clase */
let saludito = new Hola();
saludito.saludos();
/* entiendo que es un super constructor por encima de la clase, que trabaja a nivel de constructor de objeto y traslada esa propiedad a clases, metodos y atributos */ 
