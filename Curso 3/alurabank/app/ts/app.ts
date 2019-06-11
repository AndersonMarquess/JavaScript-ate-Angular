const negociacaoCtrl = new NegociacaoController();

document
    .querySelector(".form")
    // Ao usar o .bind() a palavra this é associada com o parâmetro informado dentro do bind.
    .addEventListener("submit", negociacaoCtrl.adicionar.bind(negociacaoCtrl));