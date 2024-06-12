const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Assim que saiu da escola, voce se depara com uma nova tecnologia, um chat que consegue responder todas as duvidas que uma pessoa pode ter, ele tambem gera imagens e audios super realista. Qual o seu primeiro pensamento?",
    alternativas: [
      "Isso é assustador!",
      "Isso é maravilhoso!"
    ]
  },

  {
    enunciado: "Com a descoberta dessa tecnologia, chamada inteligencia artiicial (IA), uma professora de tecnologia de uma escola decidiu fazer uma sequencia de aulas sobre essa ferramenta. No fim de uma aula ele pede que voce escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude voce toma?",
    alternativas: [
      "Utiliza uma ferramenta de busca na internet que utiliza IA pra que ela ajude a encontrar informacoes relevantes para o trabalho e explique em uma linguagem que facilite o enedimento",
      "Escreve o trabalho com base nas converas que teve com colegas, algumas pesquisas na internet e conhecimentos proprios sobe o tema"
    ]
  },

  {
    enunciado: "Pergunta 3",
    alternativas: [
      "Resposta 1",
      "Resposta 2"
    ]
  },

  {
    enunciado: "Pergunta 4",
    alternativas: [
      "Resposta 1",
      "Resposta 2"
    ]
  },

  {
    enunciado: "Pergunta 5",
    alternativas: [
      "Resposta 1",
      "Resposta 2"
    ]
  }
];

let atual =0;
let perguntaAtual;

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}

mostraPergunta();