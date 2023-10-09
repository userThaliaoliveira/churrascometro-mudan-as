document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("step1Form");
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const cepInput = document.getElementById("cep");
    const consentimentoInput = document.getElementById("consentimento");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Validar os campos
        let valid = true;

        if (nomeInput.value.trim() === "") {
            nomeInput.classList.add("error");
            valid = false;
        } else {
            nomeInput.classList.remove("error");
        }

        if (!isValidEmail(emailInput.value)) {
            emailInput.classList.add("error");
            valid = false;
        } else {
            emailInput.classList.remove("error");
        }

        if (cepInput.value.trim() === "") {
            cepInput.classList.add("error");
            valid = false;
        } else {
            cepInput.classList.remove("error");
        }

        if (valid) {
            // Armazenar informações no localStorage
            localStorage.setItem("nome", nomeInput.value);
            localStorage.setItem("email", emailInput.value);
            localStorage.setItem("cep", cepInput.value);
            localStorage.setItem("consentimento", consentimentoInput.checked);
            window.location.href = "calculadora.html";
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
});