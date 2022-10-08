// practicando y aprendiendo con OBJETOS

let persona: { nombre: string, apellido: string, edad: number, mascotas: number, metodo(): string } = {
    nombre: "fernando",
    apellido: "lepore",
    edad: 39,
    mascotas: 2,
    metodo() {
        return "hola"
    }
}

//tipos(moldes para objetos) o type ***** se aplican a los OBJETOS

type Materias = {
    matematicas: boolean,
    cienciasNat: boolean,
    fisica: boolean,
    geografia: boolean,
    lengua: boolean
    unMetodo: () => boolean
}

//ahora la creacion de un OBJETO a partir del TIPO/TYPE

let julio: Materias = {
    matematicas: true,
    cienciasNat: true,
    fisica: false,
    geografia: true,
    lengua: false,
    unMetodo() {
        return true
    },
}