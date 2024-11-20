//Ativar links do Menu
const links = document.querySelectorAll('.header-menu a');

function ativarLinks(link) {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add("ativo");
    }
}

links.forEach(ativarLinks);

//Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto (parametro) {
    const elemento = document.getElementById(parametro);
    if(elemento) {
        elemento.checked = true
    }
}

parametros.forEach(ativarProduto);

//Perguntas frequentas
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//Galeria de imagens (Bicicletas)
const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event) {
    const img = event.currentTarget;
    matchMedia('(min-width: 1000px)').matches; //Solução para nao acontecer a função com minimo de 1000px
    if (media) {
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

//Animação
if (window.SimpleAnime) {
    new SimpleAnime();
}

//Criando o envio de emails para teste
emailjs.init("6ZUZpTZvLss-JxRR2");

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o recarregamento da página
  
    // Pegue os dados do formulário
    const form = event.target;
  
    // Use a função `sendForm` do EmailJS
    emailjs.send("service_6zmfjiq","template_csqqdi5", form)
      .then(
        function () {
          alert('E-mail enviado com sucesso!');
        },
        function (error) {
          console.error('Erro:', error);
          alert('Erro ao enviar o e-mail. Tente novamente.');
        }
      );
  });
  

