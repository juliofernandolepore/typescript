/* aprendiendo a manejar FUNCIONES FLECHA EN TYPESCRIPT */

/* OJO CON LA DECLARACION DE FUNCIONES Y VARIABLES porque detectas las declaraciones en el conjunto de archivos typescript */

/* funcion normal */

let suma3 = function (a:number , b:number){
    return a + b; 
}

console.log(suma3(4,8));

/* FUNCION FLECHA */

let sumaFlecha = (a:number, b:number) => { return a + b }

let sumaFlecha2 = (c:number, d:number) => c * d;    /* sintaxis de 1 sola linea en retorno funcion flecha */

console.log(sumaFlecha(10,60));
console.log(sumaFlecha2(5,2));