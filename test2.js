// paqueteria



// cajas, sobres


class Paquete {
    constructor(id, origen, destino) {
        this.id = id;
        this.origen = origen;
        this.destino = destino;
        this.mandar = function() {
            console.log("enviando!")
        }
    }
}

class Caja extends Paquete {
    super(id, origen, destino)
    constructor(alto, ancho, profundo) {
        this.alto = alto;
        this.ancho = ancho;
        this.profundo = profundo;
    }
}

class Sobre extends Paquete {
    super(alto, ancho)
    constructor() {
        this.alto = alto;
        this.ancho = ancho;
    }
}


const cajaTest = new Caja("123", "Ciudad de Mexico", "Merida", 4, 3, 2);