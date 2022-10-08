"use strict";
/* interfaces en typescript: es un molde,
sirve para crear CLASES, OBJETOS, FUNCIONES  */
//en los objetos no se pueden agregar otras propiedades adicionales al de la interface
let fernando = {
    nombre: "fernando",
    apellido: "lepóre",
    edad: 39,
    casado: true,
    metodo2() {
        return true;
    }
};
//ahora voy a crear una clase que aplique la interface
class Personita {
    constructor(nombre, apellido, edad, casado, empleado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.casado = casado;
        //empledo es una propiedad adicional que si se permitio agregar en la clase
        this.empleado = empleado;
    }
    metodo2() {
        return true;
    }
}
let pajaro;
pajaro = function (valor) {
    return valor;
};
console.log(pajaro(true));
