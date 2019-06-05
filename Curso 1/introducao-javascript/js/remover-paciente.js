var tabelaPaciente = document.querySelector("#tabela-pacientes");
tabelaPaciente.addEventListener("dblclick", (event) => {

    // <tabela> -> eventListner
    // <tbody>
    // <tr> -> elemento pai do alvo -> event.target.parentNode
    // <td> -> elemento alvo do click -> event.target

    removerPaciente(event.target.parentNode);
});

function removerPaciente(paciente) {
    paciente.remove();
}
