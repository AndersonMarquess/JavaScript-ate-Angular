var tbody = document.querySelector("#tbody-negociacao");

//Alternativa a colocar o eventlistner dentro do botão
//Escuta o evento de submit do formulário
var formNegociacao = document.querySelector(".form");
formNegociacao.addEventListener("submit", (event) => {
    event.preventDefault();
    adicionarDadosNaTabela();
});

function adicionarDadosNaTabela() {

    var data = document.querySelector("#data");
    var quantidade = document.querySelector("#quantidade");
    var valor = document.querySelector("#valor");

    var tr = document.createElement("tr");
    tr.appendChild(criarTdComValor(data.value));
    tr.appendChild(criarTdComValor(quantidade.value));
    tr.appendChild(criarTdComValor(valor.value));
    tr.appendChild(criarTdComValor(calcularVolume(quantidade.value, valor.value)));

    tbody.appendChild(tr);
    formNegociacao.reset();
}

function criarTdComValor(valor) {
    var td = document.createElement("td");
    td.textContent = valor;
    return td;
}

function calcularVolume(quantidade, valor) {
    return (quantidade * valor).toFixed(2);
}