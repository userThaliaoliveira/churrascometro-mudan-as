function calc() {
    let homens = parseInt(document.querySelector("#homens").value);
    let mulheres = parseInt(document.querySelector("#mulheres").value);
    let criancas = parseInt(document.querySelector("#criancas").value);
    let duracao = parseInt(document.querySelector("#duracao").value);

    let resultado = document.querySelector("#resultado");
    resultado.style.display = "block";

    let tofuTotal = calcularTofu(homens, mulheres, criancas);
    let seitanOuTempehTotal = calcularSeitanOuTempeh(homens, mulheres, criancas);
    let salsichasVeganasTotal = calcularSalsichasVeganas(homens + mulheres);
    let paoVeganoTotal = calcularPaoVegano(homens, mulheres, criancas);
    let carvaoTotal = calcularCarvao(homens, mulheres, criancas, duracao);
    let aguaTotal = calcularAgua(homens, mulheres, duracao);

    resultado.innerHTML = `<h3>Será necessário:</h3>`;
    resultado.innerHTML += `<p class="tofu">${Math.round(tofuTotal)} kg de tofu</p>`;
    resultado.innerHTML += `<p class="seitan-tempeh">${Math.round(seitanOuTempehTotal)} kg de seitan</p>`;
    resultado.innerHTML += `<p class="salsichas-veganas">${salsichasVeganasTotal} salsichas veganas</p>`;
    resultado.innerHTML += `<p class="pao-vegano">${paoVeganoTotal} unidades de pão vegano</p>`;
    resultado.innerHTML += `<p class="carvao">${Math.round(carvaoTotal)} kg de carvão</p>`;
    resultado.innerHTML += `<p class="agua">${Math.round(aguaTotal)} litros de água</p>`;
}

function calcularTofu(homens, mulheres, criancas) {
    let tofuHomem = homens * 0.3; // 0.3 KG por homem
    let tofuMulher = mulheres * 0.25; // 0.25 KG por mulher
    let tofuCrianca = criancas * 0.15; // 0.15 KG por criança
    return tofuHomem + tofuMulher + tofuCrianca;
}

function calcularSeitanOuTempeh(homens, mulheres, criancas) {
    let seitanOuTempehHomem = homens * 0.25; // 0.25 KG por homem
    let seitanOuTempehMulher = mulheres * 0.2; // 0.2 KG por mulher
    let seitanOuTempehCrianca = criancas * 0.1; // 0.1 KG por criança
    return seitanOuTempehHomem + seitanOuTempehMulher + seitanOuTempehCrianca;
}

function calcularSalsichasVeganas(bebedoresSalsichasVeganas) {
    // Estimativa de 2 salsichas veganas por pessoa
    return bebedoresSalsichasVeganas * 2;
}

function calcularPaoVegano(homens, mulheres, criancas) {
    let paoVeganoHomem = homens * 2; // 2 unidades por homem
    let paoVeganoMulher = mulheres * 2; // 2 unidades por mulher
    let paoVeganoCrianca = criancas; // 1 unidade por criança
    return paoVeganoHomem + paoVeganoMulher + paoVeganoCrianca;
}

function calcularCarvao(homens, mulheres, criancas, duracao) {
    let totalPessoas = homens + mulheres + criancas;
    let carvaoPorHora = 0.2; // Estimativa de 0,2 kg de carvão por pessoa a cada 1 hora
    let carvaoNecessario = totalPessoas * carvaoPorHora * duracao;
    return Math.ceil(carvaoNecessario); // Arredonda para cima para o próximo quilo de carvão
}

function calcularAgua(homens, mulheres, duracao) {
    let totalPessoas = homens + mulheres;
    let litrosPorPessoa = 2 / 3; // 2 litros a cada 3 pessoas
    let aguaTotal = Math.ceil((totalPessoas / 3) * 2) * duracao * litrosPorPessoa;
    return aguaTotal;
}
