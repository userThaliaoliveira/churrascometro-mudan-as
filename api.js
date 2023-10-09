const express = require('express');
const app = express();
const port = 5501;
var cors = require('cors')
// Lista de receitas
const receitas = [
  {
    "id": 1,
    "nome": "Pão de alho",
    "ingredientes": [
      "4 colheres de sopa de maionese em temperatura ambiente",
      "4 colheres de sopa de margarina em temperatura ambiente",
      "Salsa desidratada a gosto",
      "3 dentes de alho amassados e triturados",
      "Queijo ralado a gosto",
      "6 pães (tipo francês, italiano, baguete)"
    ],
    "modoDePreparo": "Em uma tigela, misture bem todos os ingredientes, exceto os pães. Reserve. Faça 5 cortes em cada pão, como se fosse fatiar, mas sem ir até o final. Recheie cada corte com o creme de alho reservado e, com o creme que restar, passe mais um pouco em cima e nas laterais dos pães. Salpique com o queijo ralado e coloque-os na grelha da churrasqueira ou leve-os ao forno até dourarem. Sirva em seguida."
  },
  {
    "id": 2,
    "nome": "Farofa com maracujá",
    "ingredientes": [
      "300 g de bacon picado",
      "2 dentes de alho picados",
      "1 cebola picada",
      "2 maracujás (retirar a polpa)",
      "300 g de farinha de mandioca",
      "Óleo de soja a gosto para fritar"
    ],
    "modoDePreparo": "Em uma frigideira, frite o bacon e acrescente o alho e a cebola. Mexa até dourarem. Separe as sementes da polpa do maracujá e coloque na panela com a cebola e ao alho. Refogue por 2 minutos. Acrescente a polpa do maracujá e a farinha de mandioca e mexa por aproximadamente 5 minutos. Sirva em seguida."
  },
  {
    "id": 3,
    "nome": "Maionese de legumes",
    "ingredientes": [
      "1 kg de batatas cortadas em cubos pequenos",
      "3 cenouras cortadas em cubos pequenos",
      "1 ½ xícara de chá de vagem cortada grosseiramente",
      "200 g de ervilhas em conserva",
      "200 g de milho-verde em conserva",
      "3 ovos",
      "½ xícara de chá de azeitonas verdes picadas",
      "1 cebola ralada",
      "1 dente de alho ralado",
      "½ maço de salsinha picada",
      "1 limão",
      "3 colheres de sopa de azeite de oliva",
      "500 g de maionese",
      "30 g de queijo ralado",
      "1 maçã pequena cortada em cubos",
      "Sal e pimenta-do-reino a gosto"
    ],
    "modoDePreparo": "Coloque os legumes em uma panela e cubra com água. Cozinhe em fogo baixo até que fiquem tenros, mas não totalmente cozidos. Cozinhe os ovos, descasque-os e pique grosseiramente. Depois que os legumes estiverem cozidos, escorra a água e deixe-os esfriar. Em uma tigela, misture a cebola, o alho, o caldo do limão, o azeite, o sal, a pimenta e a salsinha. Acrescente os legumes cozidos, as azeitonas, o milho-verde, a ervilha e a maçã. Misture tudo cuidadosamente e adicione o sal. Por último, adicione a maionese e misture bem. Coloque em um refratário e salpique com queijo ralado. Conserve na geladeira até o momento de servir."
  },
  {
    "id": 4,
    "nome": "Vinagrete",
    "ingredientes": [
      "3 tomates sem sementes e cortados em cubos",
      "1 colher de café de açúcar",
      "Sal e pimenta-do-reino a gosto",
      "½ cebola-roxa cortada em cubos",
      "½ maço de cheiro-verde picado",
      "4 colheres de sopa de azeite de oliva",
      "8 colheres de sopa de vinagre de vinho branco"
    ],
    "modoDePreparo": "Em um recipiente, coloque os cubos de tomate, a cebola e o cheiro-verde. Acrescente o sal, a pimenta-do-reino, o azeite e o vinagre. Misture bem e acrescente o açúcar. Mexa novamente e leve à geladeira até o momento de servir. Dica: sirva no dia seguinte para pegar bem o tempero."
  },
  {
    "id": 5,
    "nome": "Filé mignon grelhado ao provolone",
    "ingredientes": [
      "1 kg de filé mignon",
      "300 g de queijo provolone ralado",
      "Sal a gosto",
      "Pimenta-do-reino moída a gosto"
    ],
    "modoDePreparo": "Lave em água corrente e limpe o filé. Corte transversalmente em fatias. Acrescente uma pitada de sal e de pimenta-do-reino moída em um dos lados da fatia. Leve à churrasqueira com o lado salgado para cima e mantenha na grelha sem virar até a face de cima começar a 'transpirar'. Vire o filé e coloque o queijo ralado sobre ele; mantenha grelhando até o queijo derreter. Sirva em seguida."
  }
];
app.use(cors())
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('/pergunta', (req, res) => {
    // Gere um número aleatório entre 0 e o número de receitas - 1
    const randomIndex = Math.floor(Math.random() * receitas.length);
  
    // Simule a pergunta com base em um número aleatório
    const resposta = Math.random() < 0.5 ? "Sim" : "Não";
  
    // Se a resposta for "Sim", retorne uma receita aleatória, caso contrário, retorne uma imagem
    if (resposta === "Sim") {
      res.json(receitas[randomIndex]);
    } else {
      res.send("Aqui está uma imagem.");
    }
  });

