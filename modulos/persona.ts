/* DEFINICION DE CLASE (TEMA MODULOS), con la palabra reservada export adelante de la clase podemos exportarla y luego el import en el archivo que requiera la clase */

export class Persona {
    nombre:string;
    apellido:string;

    constructor(argNombre:string, argApellido:string){
        this.nombre = argNombre,
        this.apellido = argApellido
    }
}