"use strict";
/* DEFINICION DE CLASE (TEMA MODULOS), con la palabra reservada export adelante de la clase podemos exportarla y luego el import en el archivo que requiera la clase */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(argNombre, argApellido) {
        this.nombre = argNombre,
            this.apellido = argApellido;
    }
    return Persona;
}());
exports.Persona = Persona;
