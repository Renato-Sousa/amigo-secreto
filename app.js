let inputAmigo = document.getElementById ('amigo');

let listaAmigos = [];

let ulListaAmigos = document.getElementById ('listaAmigos');
let ulResultado = document.getElementById ('resultado');

function adicionarAmigo(){
    if (inputAmigo.value == ""){
        alert('Por favor, insira um nome.');
    }
    else {
        listaAmigos.push(inputAmigo.value);
   // ulListaAmigos.innerHTML = ulListaAmigos.innerHTML + inputAmigo.value
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    }

 }
    
 function sortearAmigo() {
    let random = Math.floor(Math.random() * listaAmigos.length);
     let amigoSecreto = listaAmigos[random];
     ulResultado.innerHTML = `<li>Seu amigo secreto e : ${amigoSecreto}</li>`;
    
     }

