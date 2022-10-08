"use strict";
//Creacion de Clases
class Player {
    constructor(posicionX, posicionY, wide, height) {
        //propiedades
        this.posicionX = posicionX; //el valor del argumento se almacena como propiedad
        this.posicionY = posicionY;
        this.wide = wide;
        this.height = height;
    }
    saludar() {
        this.posicionY += 4;
        return this.posicionY;
    }
    //get obtener datos
    get getAncho() {
        return this.wide;
    }
    // set introducir datos
    set setAncho(dato) {
        this.wide = dato;
    }
}
// ahora a crear una instancia de la clase
let player1 = new Player(100, 200, 600, 500);
class JugadorHeredado extends Player {
    constructor(posicionX, posicionY, wide, height, color) {
        super(posicionX, posicionY, wide, height);
        /* aqui se coloco todo lo que va a heredar
        o heredo de la class principal */
        this.color = color;
    }
}
//Creacion de Instancia de JugadorHredado
let jugadorNieto = new JugadorHeredado(100, 200, 400, 300, "azul");
console.log(player1.wide);
/* aca no me permite ver las propiedades de la instancia player1 porque en
 la clase constructora en las propiedades se establecieron como private */ 
