function calc() {
    let homens = parseInt(document.querySelector("#homens").value);
    let mulheres = parseInt(document.querySelector("#mulheres").value);
    let criancas = parseInt(document.querySelector("#criancas").value);
    let cerveja = parseInt(document.querySelector("#cerveja").value);
    let duracao = parseInt(document.querySelector("#duracao").value);

    let resultado = document.querySelector("#resultado");
    resultado.style.display = "block";

    let carneTotal = calcularCarne(homens, mulheres, criancas);
    let frangoTotal = calcularFrango(homens, mulheres, criancas);
    let linguiçaTotal = calcularLinguiça(homens, mulheres, criancas);
    let paoAlhoTotal = calcularPaoAlho(homens, mulheres, criancas);
    let carvaoTotal = calcularCarvao(homens, mulheres, criancas, duracao);
    let refrigeranteTotal = calcularRefrigerante(homens, mulheres, criancas);
    let cervejaTotal = calcularCerveja(cerveja);

    resultado.innerHTML = `<h3>Será necessário:</h3>`;
    resultado.innerHTML += `<p class="carne">${Math.round(carneTotal)} kg de carne</p>`;
    resultado.innerHTML += `<p class="frango">${Math.round(frangoTotal)} kg de frango</p>`;
    resultado.innerHTML += `<p class="linguica">${Math.round(linguiçaTotal)} kg de linguiça</p>`;
    resultado.innerHTML += `<p class="paoAlho">${paoAlhoTotal} unidades de pão de alho</p>`;
    resultado.innerHTML += `<p class="carvao">${carvaoTotal} kg de carvão</p>`;
    resultado.innerHTML += `<p class="refrigerante">${Math.ceil(refrigeranteTotal)} litros de refrigerante</p>`;
    resultado.innerHTML += `<p class="cerveja">${cervejaTotal} garrafas de cerveja de 600ml</p>`;
}

function calcularCerveja(bebedoresCerveja) {
    // 3 garrafas de 600ml por pessoa
    return bebedoresCerveja * 3;
}

function calcularCarne(homens, mulheres, criancas) {
    let carneHomem = homens * 0.4; // 0.4 KG por homem
    let carneMulher = mulheres * 0.32; // 0.32 KG por mulher
    let carneCrianca = criancas * 0.2; // 0.2 KG por criança
    return carneHomem + carneMulher + carneCrianca;
}

function calcularFrango(homens, mulheres, criancas) {
    let frangoHomem = homens * 0.25; // 0.25 KG por homem
    let frangoMulher = mulheres * 0.2; // 0.2 KG por mulher
    let frangoCrianca = criancas * 0.15; // 0.15 KG por criança
    return frangoHomem + frangoMulher + frangoCrianca;
}

function calcularLinguiça(homens, mulheres, criancas) {
    let linguiçaHomem = homens * 0.2; // 0.2 KG por homem
    let linguiçaMulher = mulheres * 0.15; // 0.15 KG por mulher
    let linguiçaCrianca = criancas * 0.1; // 0.1 KG por criança
    return linguiçaHomem + linguiçaMulher + linguiçaCrianca;
}

function calcularPaoAlho(homens, mulheres, criancas) {
    let paoAlhoHomem = homens * 2; // 2 unidades por homem
    let paoAlhoMulher = mulheres * 2; // 2 unidades por mulher
    let paoAlhoCrianca = criancas; // 1 unidade por criança
    return paoAlhoHomem + paoAlhoMulher + paoAlhoCrianca;
}

function calcularCarvao(homens, mulheres, criancas, duracao) {
    let totalPessoas = homens + mulheres + criancas;
    let carvaoPorHora = 0.2; // Estimativa de 0,2 kg de carvão por pessoa a cada 1 hora
    let carvaoNecessario = totalPessoas * carvaoPorHora * duracao;
    return Math.ceil(carvaoNecessario); // Arredonda para cima para o próximo quilo de carvão
}

function calcularRefrigerante(homens, mulheres, criancas) {
    let totalPessoas = homens + mulheres + criancas;
    let litrosPorPessoa = 2 / 3; // 2 litros a cada 3 pessoas
    return totalPessoas * litrosPorPessoa;
}