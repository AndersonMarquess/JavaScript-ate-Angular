const negociacaoCtrl = new NegociacaoController();
document
    .querySelector(".form")
    .addEventListener("submit", negociacaoCtrl.adicionar.bind(negociacaoCtrl));
