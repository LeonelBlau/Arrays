
class Moneda{
    constructor(nombre, valor1) {
        this.nombre = nombre;
        this.valor1   = valor1;
        
    }
}

const moneda1 = new Moneda("Euros", 0.00846)
const moneda2 = new Moneda("Dolares", 0.0096);                            
const moneda3 = new Moneda("Pesos Uruguayos", 0.42485)
const moneda4 = new Moneda("Pesos Chilenos", 7.81338)
const moneda5 = new Moneda("Rupias", 0.71412)
const moneda6 = new Moneda("Libras", 0.00705)
const moneda7 = new Moneda("Yenes", 1.09817)
const moneda8 = new Moneda("Reales", 0.05297)
const moneda9 = new Moneda("Francos", 0.00879)

const Monedas = [moneda1, moneda2, moneda3, moneda4, moneda5, moneda6, moneda7, moneda8, moneda9];
console.log(Monedas)


let resultado = 0;
let adquirir;
let cantidad = 0;

    
    alert("Bienvenido, en este simulador solo aceptamos Pesos Argentinos")

function solicitarDatos() {

    let adquirir = prompt("Que moneda desea adquirir? (Euros, Dolares, Pesos Uruguayos, Pesos Chilenos, Rupias, Libras, Yenes, Reales o Francos")

    let cantidad = Number(prompt("Que monto desea convertir a Pesos Argentinos?"))

    Verificar(adquirir, cantidad)
}

function Verificar(adquirir, cantidad, resultado) {
    if (adquirir == moneda1.nombre) {
        resultado = cantidad * moneda1.valor1
        alert("Usted va a adquirir " + resultado + " $")
    } else if (adquirir == moneda2.nombre) {
        resultado = cantidad * moneda2.valor1
        alert("Usted va a adquirir " + resultado + " $")
    } else if (adquirir == moneda3.nombre) {
        resultado = cantidad * moneda3.valor1
        alert("Usted va a adquirir " + resultado + " $")
    } else if (adquirir == moneda4.nombre) {
        resultado = cantidad * moneda4.valor1
        alert("Usted va a adquirir " + resultado + " $")
    } else if (adquirir == moneda5.nombre) {
        resultado = cantidad * moneda5.valor1
        alert("Usted va a adquirir " + resultado + " $")
    } else if (adquirir == moneda6.nombre) {
        resultado = cantidad * moneda6.valor1
        alert("Usted va a adquirir " + resultado + " $")
    } else if (adquirir == moneda7.nombre) {
        resultado = cantidad * moneda7.valor1
        alert("Usted va a adquirir " + resultado + " $")
    } else if (adquirir == moneda8.nombre) {
        resultado = cantidad * moneda8.valor1
        alert("Usted va a adquirir " + resultado + " $")
    } else if (adquirir == moneda9.nombre) {
        resultado = cantidad * moneda9.valor1
        alert("Usted va a adquirir " + resultado + " $")
    } else {
        alert("Error, no se puede identificar la moneda o el monto ingresado")
    }
}


solicitarDatos()