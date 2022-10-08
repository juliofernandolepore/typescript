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
let mixto: [string, boolean, number] = ["hola", true, 39]
console.log(typeof mixto, mixto)
//hay que especificar cada dato del array mixto o tupla[]

mixto.push("ultimo elemento en array agregado con metodo push")
console.log(mixto)
//despues del push no dio ningun error en virtud del no haberlo especificado al tipo de dato
mixto.push(true)
//en cambio las listas(array comun) pueden ser mas restrictivas y no lo permitira

//enum o enumerables
enum Paises {
    venezuela,
    argentina = 10,
    italia,
    brasil,
    uruguay,
    peru
}
let posicion: number = Paises.italia
console.log(posicion)

//void o vacio, sin retorno

function vacia(palabra: string): void {
    console.log(`${palabra}`)
}
vacia("hola")
//con return
function conRetorno(palabra: string): string {
    //console.log(`${palabra}`)
    return palabra
}
conRetorno("hola")

/* never que devuelve un tipo de error

function error(frase:string):never{
    throw new Error(frase)
}

error("este codigo no se puede ejecutar") */

//null y undefined

let sinNada:undefined = undefined

let nulo:null = null

