"use strict";
/* APRENDIENDO A USAR DECORADORES , se utiliza el simbolo de arroba  @  */
/* agregan funcionalidad a la clase que pretendemos decorar, el decorador se puede tambien aplicar a METODOS Y ATRIBUTOS o PROPIEDADES DE LA CLASE */
/* TARJET: es lo que queremos que se ejecute */
/*   function saludar(tarjet: Function):void {
    tarjet.prototype.saludos = function(): void {
        console.log("hola desde decoradores");
    }
}  */
/* ahora procedemos a decorar la clase */
/*  @saludar
class Hola {
    constructor(){
    }
} */
/* ahora declaro una instancia de la clase */
/* let saludito = new Hola();
saludito.saludos(); */
/* entiendo que es un super constructor por encima de la clase, que trabaja a nivel de constructor de objeto y traslada esa propiedad a clases, metodos y atributos */ 
