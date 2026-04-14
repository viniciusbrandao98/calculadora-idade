const btn = document.getElementById("botao");
const idade = document.getElementById("aniversario");

function calcularIdade() {
    const idadeValor = idade.value;
    if (idadeValor === "") {
        alert("Insira uma data válida");
        return;
    }
    const dataNascimento = new Date(idadeValor);
    const anoAtual = new Date();
    let idadeFinal = Math.floor((anoAtual - dataNascimento) / 31557600000);
    const resultado = document.getElementById("resultado");
    resultado.innerText = `Sua idade é: ${idadeFinal} anos`;
}

btn.addEventListener("click", () => {
    calcularIdade();
    setTimeout(() => {
        resultado.innerText = "";
        idade.value = "";
    }, 4000);

})

