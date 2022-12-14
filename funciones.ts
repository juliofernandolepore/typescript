//aprendiendo funciones en typescript
//funciones declaradas
function miFuncion(saludo: string): string {
    return saludo
}
console.log(miFuncion("hola mundo"))

//funciones Expresadas

//esta es una FUNCION FLECHA guardada en una constante.

const expresada = (parametro: string): string => parametro
console.log(expresada("hola"))

//otra sintaxis de funcion flecha

const expresada2 = (parametro: string): string => {
    return parametro
}
console.log(expresada2("hola"))

// esta es una funcion comun almacenada en constante

const despedida = function (despedida: string): string {
    return `${despedida}`
}
console.log(despedida("adios"))

//FUNCION FLECHA

let suma = (numero1: number, numero2: number): number => {
    let resultado = numero1 + numero2
    return resultado
}
console.log(suma(10, 30))
//funcion flecha con return string porque esta usando template strings
let suma2 = (numero1: number, numero2: number): string => {
    let resultado = `${numero1 + numero2}`
    return resultado
}
console.log(typeof suma2(80, 30))

//Parametros opcionales o Por defecto
//se usa un signo de interrogacion en el segundo parametro

function ejemplo(num1: number, num2?: number): number {
    return num1
}
console.log(ejemplo(50))

//ahora una funcion con parametros por defecto
function ejemplo2(num1: number = 100, num2: number = 200): number {
    return num1 + num2
}
//el segundo parametro por defecto ya que solo coloque el primero
console.log(ejemplo2(50))
console.log(ejemplo2())

//REST OPERATOR ... pasando arrays por parametro

function animales(...lista: string[]): string[] {
    return lista
}

console.log(animales("ave", "perro", "gato", "reptil", "monos"))