function rec(resultado) {
  let receita = document.querySelector("#receita");
  receita.style.display = "block"; // Exibe a div com ID "receita"
  receita.innerHTML = `<h3>Nome da Receita: ${resultado.nome}</h3>`;
  receita.innerHTML += `<p>Ingredientes: ${resultado.ingredientes.join(', ')}</p>`; // Junta os ingredientes em uma string
  receita.innerHTML += `<p>Modo de Preparo: ${resultado.modoDePreparo}</p>`;
  
  // Oculta a div com a classe "receitas"
  let receitasDiv = document.querySelector(".receitas");
  receitasDiv.style.display = "none";
}

// Adicione um evento de clique ao botão "Sim"
document.getElementById("simButton").addEventListener("click", function() {
  // Realize a chamada à API quando o botão "Sim" for clicado
  fetch("http://localhost:5501/pergunta")
    .then(resp => resp.json())
    .then(resp => rec(resp));
});

    // Adicione um evento de clique ao botão "Não"
    document.getElementById("naoButton").addEventListener("click", function() {
      // Realize a ação desejada quando a resposta for "Não"
      // Por exemplo, você pode exibir uma imagem ou uma mensagem diferente
      alert("Tudo bem :(");
    });