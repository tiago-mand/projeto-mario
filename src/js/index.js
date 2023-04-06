
console.log('mostrar o document', document);
//passo 1 - dar um jeito de pegar o elemento que representa o botão na  tela usando o js

const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
//passo 2 - dar um jeito de indentificar quando o usuario clicar no botao

botaoTrailer.addEventListener("click", () => {
    //passo 4 - abrir a modal na tela
   modal.classList.add("aberto");
   video.setAttribute("src", linkDoVideo);
});

// objetivo 2 - quando o usuario clicar no x devemos fechar a modal
// passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js
const botaoFecharModal = document.querySelector(".fechar-modal");
console.log(botaoFecharModal);
//-passo 2 - dar um jeito de identificar quando o usuario clicar no x
botaoFecharModal.addEventListener("click", () => {
     // passo 3 - fechar a modal  
    modal.classList.remove("aberto");
    video.setAttribute("src", "")
})


