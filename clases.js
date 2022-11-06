"use strict";
//Creacion de Clases
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    function Player(posicionX, posicionY, wide, height) {
        //propiedades
        this.posicionX = posicionX; //el valor del argumento se almacena como propiedad
        this.posicionY = posicionY;
        this.wide = wide;
        this.height = height;
    }
    Player.prototype.saludar = function () {
        this.posicionY += 4;
        return this.posicionY;
    };
    Object.defineProperty(Player.prototype, "getAncho", {
        //get obtener datos
        get: function () {
            return this.wide;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "setAncho", {
        // set introducir datos
        set: function (dato) {
            this.wide = dato;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
// ahora a crear una instancia de la clase
var player1 = new Player(100, 200, 600, 500);
var JugadorHeredado = /** @class */ (function (_super) {
    __extends(JugadorHeredado, _super);
    function JugadorHeredado(posicionX, posicionY, wide, height, color) {
        var _this = _super.call(this, posicionX, posicionY, wide, height) || this;
        /* aqui se coloco todo lo que va a heredar
        o heredo de la class principal */
        _this.color = color;
        return _this;
    }
    return JugadorHeredado;
}(Player));
//Creacion de Instancia de JugadorHredado
var jugadorNieto = new JugadorHeredado(100, 200, 400, 300, "azul");
console.log(player1.wide);
/* aca no me permite ver las propiedades de la instancia player1 porque en
 la clase constructora en las propiedades se establecieron como private */ 
