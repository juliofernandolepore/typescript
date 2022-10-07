const mensaje: string = "mi primer typescript";

//booleanos o tipo bool
let esVerdad: boolean = true
console.log(typeof (esVerdad))
//numeros o tipo de dato number
let numero: number = 39
console.log(typeof numero)
//no se le puede cambiar el tipo de dato pero si el valor
//ahora el tipo de dato string o cadena
let cadena: string = "hola a todos"
console.log(typeof cadena)

//ahora el tipo Any o cualquiera
let otroMensaje: any = "otra cadena con uso de any"
//permite que le pueda asignar otro tipo de dato en la variable
otroMensaje = 20
console.log(typeof otroMensaje)
otroMensaje = true
console.log(typeof otroMensaje)

//arrays o arreglos
let lista: number[] = [1, 2, 3, 4, 5, 6] //sintaxis de array
console.log(typeof lista, lista)

//tuple o tuplas
let mixto:[string,boolean,number]=["hola", true, 39]
console.log(typeof mixto, mixto)
//hay que especificar cada dato del array mixto o tupla[]

