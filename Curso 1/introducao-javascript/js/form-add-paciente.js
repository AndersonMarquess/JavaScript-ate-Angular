var form = document.querySelector("#form-add-paciente");
function criarPacienteComValoresDoForm() {
    //Objeto
    var paciente = {
        //é possível acessar os input's dentro do form, através do nome. -> form.nameDoInput
        // para objetos é usado : na atribuição de valor
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}