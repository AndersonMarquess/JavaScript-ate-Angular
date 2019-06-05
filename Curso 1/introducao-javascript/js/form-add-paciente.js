var form = document.querySelector("#form-add-paciente");
function capturarValoresDoForm() {
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    return { nome, peso, altura, gordura };
}