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
});

function adicionarPacienteNaTabela() {
    var paciente = criarPacienteComValoresDoForm();
    adicionarPacienteNaTabelaDeListagem(paciente);
}
