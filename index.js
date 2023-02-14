
class Celular {
    constructor(color, peso, tamaño, rdc, ram){
        this.color = color
        this.peso = peso
        this.tamaño = tamaño
        this.rdc = rdc
        this.ram = ram
        this.encendido = false;
    }

    presionarBotonEncenido(){
        if (this.encendido == false){
            alert("celular prendindo")
            this.encendido = true
        }
        else{
            alert("Celular apagado")
            this.encendido = false
        }
    }

    reiniciar (){
        if (this.encendido == true){
            alert("Reiniciando celular")
        }
        else{
            alert("celular apagado ")
        }
    }

    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.rdc}`)
    }

    grabarVideo(){
        alert(`video tomado en una resolucion de: ${this.rdc}`)
    }

    mostrarInfo(){
        return `
        Color: <b>${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamaño}</b><br>
        Resolucin de video: <b>${this.rdc}</b><br>
        Memoria RAM: <b>${this.ram}</b><br>
        `
    }

}

class CelularGamaAlta extends Celular {
    constructor(color, peso, tamaño, rdc, ram, rdce) {
        super(color, peso, tamaño, rdc, ram);
        this.rdce = rdce 
    }
    grabarVideoLento(){
        alert("estas grabando en camara lenta")
    }
    reconocimientoFacial(){
        alert("vamos a iniciar reconocimientofacial")
    }
    infoGamaAlta(){
        return this.mostrarInfo() + `Resolucion de camara extra: ${this.rdce}`;
    }
}

// celular1 = new Celular ("rojo", "160g", "5'", "hd", "2");
// celular2 = new Celular ("azul", "150g", "5.1'", "ultra hd", "2");
// celular3 = new Celular ("blanco", "120g", "5.4'", "hd", "4");

// document.write(`
// ${celular1.mostrarInfo()} <br>
// ${celular2.mostrarInfo()} <br>
// ${celular3.mostrarInfo()} <br>
// `)

// celular1.presionarBotonEncenido()
// celular1.tomarFoto()
// celular1.grabarVideo()
// celular1.reiniciar()
// celular1.presionarBotonEncenido()


celular1 = new CelularGamaAlta ("azul", "100g", "6'", "4k", "4", "full hd")
celular2 = new CelularGamaAlta ("negro", "120g", "6'", "4k", "8", "full hd")

document.write(`
${celular1.infoGamaAlta()} <br>
${celular2.infoGamaAlta()} <br>
`)