/* interfaces en typescript: es un molde, 
sirve para crear CLASES, OBJETOS, FUNCIONES  */

interface Persona{
    nombre: string
    apellido: string
    edad : number,
    casado: boolean,
    metodo2():boolean
}
//en los objetos no se pueden agregar otras propiedades adicionales al de la interface
let fernando:Persona = {
    nombre: "fernando",
    apellido: "lepóre",
    edad: 39,
    casado: true,
    metodo2(){
        return true
    }
}
//ahora voy a crear una clase que aplique la interface

class Personita implements Persona{
    nombre:string
    apellido: string
    edad: number
    casado: boolean
    empleado: boolean

    constructor(nombre: string, apellido: string, edad: number, casado: boolean, empleado: boolean){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.casado = casado
        //empledo es una propiedad adicional que si se permitio agregar en la clase
        this.empleado = empleado
    }
    metodo2(){
        return true
    }
}

//Interfaces en Funciones 

interface Movimiento{
    //ahora creo una funcion ()
    (valor:boolean):boolean
}

let pajaro:Movimiento;

pajaro = function(valor:boolean):boolean{
    return valor
}
console.log(pajaro(true))
