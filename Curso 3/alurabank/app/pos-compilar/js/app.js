System.register(["./controllers/NegociacaoController"], function (exports_1, context_1) {
    "use strict";
    var NegociacaoController_1, negociacaoCtrl;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (NegociacaoController_1_1) {
                NegociacaoController_1 = NegociacaoController_1_1;
            }
        ],
        execute: function () {
            negociacaoCtrl = new NegociacaoController_1.NegociacaoController();
            document
                .querySelector(".form")
                .addEventListener("submit", negociacaoCtrl.adicionar.bind(negociacaoCtrl));
        }
    };
});
