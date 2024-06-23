let numSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numMax = 10;

function asignarTextoElementos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numGenerado = Math.floor(Math.random()*numMax) + 1;
    if (listaNumerosSorteados.length == numMax){
        asignarTextoElementos('p', 'Ya se jugaron todos los números posibles.')
    } else {
        if (listaNumerosSorteados.includes(numGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numGenerado);
            return numGenerado;
        }
    }
}

function verificarTexto() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario == numSecreto) {
        asignarTextoElementos('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numSecreto) {
            asignarTextoElementos('p','El número secreto es menor');
        } else {
            asignarTextoElementos('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElementos('h1', 'Juego del número secreto');
    asignarTextoElementos('p', `Elige un número del 1 al ${numMax }`);
    numSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
