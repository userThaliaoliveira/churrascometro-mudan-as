       // Seleciona o botão e o body do documento
       const btnAlterar = document.getElementById("btnAlterar");
       const body = document.body;

       // Adiciona um ouvinte de eventos ao botão para detectar cliques
       btnAlterar.addEventListener("click", function() {
           // Adiciona a classe que aplica o estilo de backdrop-filter
           body.classList.toggle("escuro");

           // Verifica se o corpo possui a classe "escuro" e atualiza a cor do botão
           if (body.classList.contains("escuro")) {
               btnAlterar.style.backgroundColor = "var(--gray-bg)";
           } else {
               btnAlterar.style.backgroundColor = "#ff0022";
           }
       });