const botaoAlterarTena = document.getElementById("botao-alterar-tema")
const body = document.querySelector("body")
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTena.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if (modoEscuroAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")

    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")

    }
})

