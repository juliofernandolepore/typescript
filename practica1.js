var mensaje = "mi primer typescript";
//booleanos o tipo bool
var esVerdad = true;
console.log(typeof (esVerdad));
//numeros o tipo de dato number
var numero = 39;
console.log(typeof numero);
//no se le puede cambiar el tipo de dato pero si el valor
//ahora el tipo de dato string o cadena
var cadena = "hola a todos";
console.log(typeof cadena);
//ahora el tipo Any o cualquiera
var otroMensaje = "otra cadena con uso de any";
//permite que le pueda asignar otro tipo de dato en la variable
otroMensaje = 20;
console.log(typeof otroMensaje);
otroMensaje = true;
console.log(typeof otroMensaje);
//arrays o arreglos
var lista = [1, 2, 3, 4, 5, 6]; //sintaxis de array
console.log(typeof lista, lista);
//tuple o tuplas
var mixto = ["hola", true, 39];
console.log(typeof mixto, mixto);
//hay que especificar cada dato del array mixto o tupla[]
mixto.push("ultimo elemento en array agregado con metodo push");
console.log(mixto);
//despues del push no dio ningun error en virtud del no haberlo especificado al tipo de dato
mixto.push(true);
//en cambio las listas(array comun) pueden ser mas restrictivas y no lo permitira
