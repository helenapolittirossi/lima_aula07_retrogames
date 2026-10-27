const btnCadastrar = document.getElementById("btnCadastrar")
const btnCancelar = document.getElementById("btnCancelar")
const modal = document.getElementById("modalCadastro")
const form = document.getElementById("formJogo")
const lista = document.getElementById("listarJogos")
const mensagemVazia = document.getElementById("mensagemVazia")

btnCadastrar.addEventListener("click", ()=>{
    modal.showModal()
})
btnCancelar.addEventListener("click", ()=>{
    modal.close()
})
form.addEventListener("submit",(evento)=>{
    evento.preventDefault()
    const titulo = document.getElementById("titulo").value.trim()
    const plataforma = document.getElementById("plataforma").value.trim()
    const desenvolvedora = document. getElementById("desenvolvedora").value.trim()
    const imagem = document. getElementById("imagem").value.trim()
    const preco = document. getElementById("preco").value.trim()

    criarCard(titulo,plataforma,desenvolvedora,imagem,preco)
    form.reset()
    modal.close()
})
function criarCard(disco, plataforma, desenvolvedora, imagem, preco){
    mensagemVazia.hidden = true;

    const card = document.createElement("article")
    card.classList.add("card-jogo")
    const capa = document.createElement("div")
    capa.classList.add("capa")
    const imagemCapa = document.createElement("img")
    imagemCapa.src = imagem 
    capa.appendChild(imagemCapa)
    const info = document.createElement("div")
    info.classList.add("info-jogo")
    const titulo = document.createElement("h3")
    titulo.textContent = titulo
    const nomePlataforma = document.createElement("p")
    nomePlataforma.textContent = "plataforma: " + plataforma
    const nomeDesenvolvedora = document.createElement ("p")
    nomeDesenvolvedora.textContent = "Gênero: " + desenvolvedora
    const valor = document.createElement("strong")
    valor.classList.add("preco")
    valor.textContent = preco.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})
    info.append(titulo, nomePlataforma,nomeDesenvolvedora,valor)
    card.append(capa,info)
    lista.appendChild(card)
}