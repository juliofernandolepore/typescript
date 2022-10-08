//Creacion de Clases

class Player {
    //hay que declarar los tips de datos antes del CONSTRUCTOR
    private posicionX: number
    private posicionY: number
    private wide: number
    private height: number
    constructor(posicionX: number, posicionY: number, wide: number, height: number) {
        //propiedades
        this.posicionX = posicionX //el valor del argumento se almacena como propiedad
        this.posicionY = posicionY
        this.wide = wide
        this.height = height
    }
    public saludar() {
        this.posicionY += 4
        return this.posicionY
    }
    //get obtener datos
    public get getAncho(): number {
        return this.wide

    }
    // set introducir datos
    public set setAncho(dato: number) {
        this.wide = dato
    }
}
// ahora a crear una instancia de la clase

let player1: Player = new Player(100, 200, 600, 500)

class JugadorHeredado extends Player {
    /* esta es una clase que va a heredar de la clase Player , la herencia 
    se usa para heredar todo o casi todo */
    color: string
    constructor(posicionX: number, posicionY: number, wide: number, height: number, color: string) {
        super(posicionX, posicionY, wide, height)
        /* aqui se coloco todo lo que va a heredar 
        o heredo de la class principal */
        this.color = color
    }
}
//Creacion de Instancia de JugadorHredado
let jugadorNieto = new JugadorHeredado(100, 200, 400, 300, "azul")

console.log(player1.wide)
/* aca no me permite ver las propiedades de la instancia player1 porque en
 la clase constructora en las propiedades se establecieron como private */