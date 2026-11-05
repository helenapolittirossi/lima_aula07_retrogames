const API_URL = "http://localhost:3000"

const btnCadastrar = document.getElementById("btnCadastrar")
const btnCancelar = document.getElementById("btnCancelar")
const modal = document.getElementById("modalCadastro")
const form = document.getElementById("formJogo")
const lista = document.getElementById("listarjogos")
const mensagemVazia = document.getElementById("mensagemVazia")

btnCadastrar.addEventListener("click", ()=>{
    modal.showModal()
})

btnCancelar.addEventListener("click", ()=>{
    modal.close()
})

//Carregar os jogos do BD(GET)
async function carregarJogos(){
    try{
        const resposta = await fetch(API_URL + '/listar')
        const jogos = await resposta.json()

        lista.innerHTML = ""

        if(jogos.length === 0){
            mensagemVazia.hidden = false
            lista.appendChild(mensagemVazia)
            return
        }

        mensagemVazia.hidden = true
        //Renderize os jogos encontrados
        jogos.forEach(jogo => {
            criarCard(jogo.titulo, jogo.plataforma, jogo.desenvolvedora, jogo.imagem, jogo.preco)
        })
    } catch (erro) {
        console.error("Erro ao carregar os jogos:", erro)
        alert("Não foi possível conectar ao servidor")
    }
    
}
//Cadastrar novo jogo(POST)

form.addEventListener("submit", async (evento)=>{
    evento.preventDefault()

    const novoJogo = {
        titulo: document.getElementById("titulo").value.trim(),
        plataforma: document.getElementById("plataforma").value.trim(),
        desenvolvedora: document.getElementById("desenvolvedora").value.trim(),
        imagem: document.getElementById("imagem").value.trim(),
        preco: Number(document.getElementById("preco").value())
    }
    try{
        const resposta = await fetch(API_URL + '/cadastrar',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novoJogo)

        })

        if(resposta.ok){
            form.reset()
            modal.close()
            carregarJogos()
        }else{
            alert("Erro ao salvar jogos. Verifique BD")
        }
    }catch{
        console.error("Erro ao cadastrar o jogo:", erro)
        alert("Não foi possível cadastrar o jogo")
    }


})
function criarCard(jogo, plataforma, desenvolvedora, imagem, preco){
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
    titulo.textContent = jogo

    const nomePlataforma = document.createElement("p")
    nomePlataforma.textContent = "plataforma: " + plataforma

    const nomeDesenvolvedora = document.createElement ("p")
    nomeDesenvolvedora.textContent = "desenvolvedora: " + desenvolvedora

    const valor = document.createElement("strong")
    valor.classList.add("preco")
    valor.textContent = preco.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})

    info.append(titulo, nomePlataforma,nomeDesenvolvedora,valor)
    card.append(capa,info)
    lista.appendChild(card)
}
carregarJogos()