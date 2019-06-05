var titulo = document.querySelector("h1");

//Escuta evento -> função invocada
titulo.addEventListener("click", imprimirEvento);
function imprimirEvento() {
    console.log("clicou");
}

// função anônima que detecta duplo click
titulo.addEventListener("dblclick", () => confirm("Deu certo!"));

var btnAdicionar = document.querySelector("#adicionar-paciente");
btnAdicionar.addEventListener("click", (event) => {
    //para impedir o comportamento padrão de reload da página, usamos o preventDefault()
    event.preventDefault();
    adicionarPacienteNaTabela();
    console.log("Paciente adicionado.");
});

var form = document.querySelector("#form-add-paciente");
function adicionarPacienteNaTabela() {
    //é possível acessar os input's dentro do form, através do nome. -> form.nameDoInput
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTR = document.createElement("tr");
    adicionarValorNaTR(nome, pacienteTR);
    adicionarValorNaTR(peso, pacienteTR);
    adicionarValorNaTR(altura, pacienteTR);
    adicionarValorNaTR(gordura, pacienteTR);

    adicionarTRnaTabela(pacienteTR);
}

function adicionarTRnaTabela(tr) {
    document.querySelector("#tabela-pacientes")
        .appendChild(tr);
}

function adicionarValorNaTR(valor, tr) {
    //Cria o elemento td
    var td = document.createElement("td");
    //adiciona o valor dentro da td
    td.textContent = valor;
    //adiciona o 
    tr.appendChild(td);
}

