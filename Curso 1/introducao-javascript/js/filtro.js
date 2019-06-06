var inputFiltro = document.querySelector("#filtro-tabela");
//sempre que alguma tecla for apertada -> input
inputFiltro.addEventListener("input", () => {
    ocultarInvalidosAoFiltro(inputFiltro);
});

function ocultarInvalidosAoFiltro(valorFiltro) {
    var pacientes = document.querySelectorAll(".paciente");

    var expRegular = new RegExp(valorFiltro.value, "i");

    pacientes.forEach(p => {
        var nomePaciente = p.querySelector(".info-nome").textContent;
        if (expRegular.test(nomePaciente)) {
            p.classList.remove("ocultar");
        } else {
            p.classList.add("ocultar");
        }
    });
}
