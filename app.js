let listaDeNumerosSorteados = [];
let numeroLimite=50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas =1;

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial (){
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 50');
}
exibirMensagemInicial();

function verificarChute () {
    let chute =document.querySelector('input').value;
   
    if (chute== numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas >1 ?  'tentativas': 'tentativa'; 
        let mensagemTentativas = (`Você descobriu o número Secreto com ${tentativas} ${palavraTentativa}!`);
        exibirTextoNaTela( 'p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute> numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativas++;
        limparCampo ();
    }
}

function gerarNumeroAleatorio(){
   let numeroEscolhido= parseInt(Math.random() *numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
   
   if (quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados=[];
   }
       if (listaDeNumerosSorteados.includes(numeroEscolhido)){
         return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
   }
}    

function limparCampo() {
    chute=document.querySelector('input');
    chute.value= '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}









// JavaScript com HTML, geralmente usa-se h1 para título
// let titulo=document.querySelector('h1'); // seleciona lá no HTML <h1></h1>
// titulo.innerHTML = 'Jogo do Número Secreto'; // dentro do HTML 

// let paragrafo = document.querySelector('p'); // selecionar o paragrafo
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; // alterar o conteudo

// 1ª função não trás nenhum retorno, apenas exibe na tela mesmo tendo parâmetros
//2ª função não tem parâmetro e não tem retorno (função que verifica o chute).
//3ª não tem parÂmetro, mas tem retorno return

//('input').value busca no HTML apenas o valor informado 