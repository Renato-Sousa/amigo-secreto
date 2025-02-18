let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;

    if (nomeAmigo.trim() === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nomeAmigo);
        document.getElementById("amigo").value = ""; // Limpa o campo de texto
        mostrarListaAmigos();
    }
}

function mostrarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de adicionar novos elementos

    amigos.forEach(function(amigo) {
        let itemLista = document.createElement("li");
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}

function sortearAmigo() {
    let quantidadeAmigos = amigos.length;
    if (quantidadeAmigos === 0) {
        alert("Por favor, insira um nome antes de sortear.");
    } else {
        let indiceAmigo = Math.floor(Math.random() * quantidadeAmigos);
        let resultadoHTML = document.getElementById("resultado");
        resultadoHTML.innerHTML = amigos[indiceAmigo];
    }
}