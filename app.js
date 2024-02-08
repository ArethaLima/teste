//Variaveis do jogo
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


//Função com parâmetros - Chamando as tags HTML
function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
}

//Função Mensagem Inicial 
function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

//Função de retorno - Math.random - número aleatorio 
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == 10){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

//Função do jogo 
function verificarChute(){
    let chute = document.querySelector('input').value;
   
    if(chute == numeroSecreto){

        exibirTextoNaTela('h1', 'Parabéns, você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        //Pegar o elemento pelo ID - Habilitar o botão que consta desabilitado
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else if (chute >numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é menor');
    }else{
        exibirTextoNaTela('p', 'O número secreto é maior');
    }
    tentativas++;
    limparCampo();
}

//Função limpar campo
function limparCampo(){
    //Só pegar o campo input sem o valor 
    chute = document.querySelector('input');
    chute.value = '';
}

//Função reiniciar jogo - Processo 
// 1 - Número sorteado / 2 - limpar o campo do chute / 3 - Iniciar na 1º tentativa / 4- Mensagem Inicial 

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}