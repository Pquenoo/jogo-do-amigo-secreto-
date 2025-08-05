//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
 

const amigos = [];

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nome, index) => {
    const item = document.createElement("li");
    item.textContent = `${index + 1}. ${nome}`;
    lista.appendChild(item);
  });
}

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome válido!");
    return;
  }

  amigos.push(nome);
  input.value = "";
  atualizarLista();
}



function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigos.length < 2) {
    alert("Adicione pelo menos 2 amigos para sortear.");
    return;
  }

  const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

  const item = document.createElement("li");
  item.textContent = `🎉 Amigo sorteado: ${sorteado}`;
  resultado.appendChild(item);
}
