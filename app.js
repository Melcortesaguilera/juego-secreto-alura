let numeroSecreto = 0;
let intentos = 1;
//almacena cada uno de los numeros para preguntar si fue sorteado o no y no volverlo a mostrar.
let listaNumerosSoreteados = [];
let numeroMaximo = 3;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `acertastes en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'el numero es menor!');
        } else {
            asignarTextoElemento('p', 'el numero es mayor!');
        }
        intentos++;
        limpiarCaja();
    }
    return;

}

function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSoreteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSoreteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');
    } else {
        //si el numero generado esta incluido en la lista, hacemos una operacion, sino hacemos otra.
        if (listaNumerosSoreteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSoreteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }


    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //necesitamos limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero secreto aleatorio
    // inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juevos
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
   
    
}

condicionesIniciales();







