/* Retorna o elemento de acordo com a tag/classe especificada */
var titulo = document.querySelector(".titulo-principal");
// Imprime os dados com a tag
console.log(titulo);
// Imprime apenas o conteúdo da tag
console.log(titulo.textContent);

document.querySelector("title").innerText = "little italy? never heard about...";

//For com query dos pacientes para calcular automaticamente os IMC's

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    mostrarIMCnoTD(pacientes[i]);

    if (i % 2 == 0) {
        // muda a cor da linha, adicionando uma classe ao elemento.
        pacientes[i].classList.add("campo-invalido");
    }
}

function mostrarIMCnoTD(paciente) {
    if (paciente != null) {
        var peso = paciente.querySelector(".info-peso").textContent;
        var altura = paciente.querySelector(".info-altura").textContent;
        var imc = peso / (altura * altura);

        //toFixed é usado para definir a quantidade de casas decimais
        paciente.querySelector(".info-imc").textContent = imc.toFixed(2);
    }
}