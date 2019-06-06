var btnBuscarPacientes = document.querySelector("#buscar-paciente");
btnBuscarPacientes.addEventListener("click", () => {
    console.log("buscando pacientes");
    buscarPacientesDaAPI();
});

function buscarPacientesDaAPI() {
    //faz a requisição assíncrona
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();

    // load -> quando o carregamento das informações acabar, ele invoca a lambda.
    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            atualizarTabelaComDadosDaAPI(xhr.responseText);
        } else {
            console.log(`Erro ${xhr.status} - ${xhr.responseText}`);
        }
    });
}

function atualizarTabelaComDadosDaAPI(jsonRecebido) {
    var pacientes = JSON.parse(jsonRecebido);
    pacientes.forEach(paciente => {
        adicionarPacienteNaTabelaDeListagem(paciente);
    });
}
