"use strict";
/* TRABAJANDO CON CLASES EN ARCHIVO MODULO */
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var instanciaPersona1 = new persona_1.Persona("fernando", "lopez");
console.log(instanciaPersona1.nombre);
console.log(instanciaPersona1.apellido);
