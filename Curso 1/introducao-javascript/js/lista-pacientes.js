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
    mudarCorDaTR();
}

function mudarCorDaTR() {
    if (i % 2 == 0) {
        // muda a cor da linha, adicionando uma classe ao elemento.
        pacientes[i].classList.add("campo-invalido");
    }
}

function mostrarIMCnoTD(paciente) {
    if (paciente != null) {
        var peso = paciente.querySelector(".info-peso").textContent;
        var altura = paciente.querySelector(".info-altura").textContent;
        paciente.querySelector(".info-imc").textContent = calcularIMC(peso, altura);
    }
}

function criarNovaTR() {
    //é possível acessar os input's dentro do form, através do nome. -> form.nameDoInput
    var { nome, peso, altura, gordura } = capturarValoresDoForm();
    var pacienteTR = document.createElement("tr");
    adicionarValorNaTR(nome, pacienteTR);
    adicionarValorNaTR(peso, pacienteTR);
    adicionarValorNaTR(altura, pacienteTR);
    adicionarValorNaTR(gordura, pacienteTR);
    adicionarValorNaTR(calcularIMC(peso, altura), pacienteTR);
    return pacienteTR;
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

function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    
    //toFixed é usado para definir a quantidade de casas decimais
    return imc.toFixed(2);
}
