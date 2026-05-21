const visor = document.getElementById('visor');

function adicionarAoVisor(valor) {
    visor.value += valor
}

function limparVisor() {
    visor.value = '';
}

function apagarUltimo() {
    visor.value = visor.value.slice(0, -1);
}

function calcular() {
    try {
    visor.value = eval(visor.value);
    } catch (erro){
        visor.value = 'Erro';
    }
}