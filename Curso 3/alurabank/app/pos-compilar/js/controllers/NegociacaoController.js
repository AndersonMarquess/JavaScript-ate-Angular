System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.ListaNegociacao();
                    this._negociacaoView = new index_1.NegociacaoView(this.getElementoComSeletor("#tabela-negociacoes"));
                    this._mensagemView = new index_1.MensagemView(this.getElementoComSeletor("#mensagemView"));
                    this._data = this.getElementoComSeletor("#data");
                    this._quantidade = this.getElementoComSeletor("#quantidade");
                    this._valor = this.getElementoComSeletor("#valor");
                    this._negociacaoView.update(this._negociacoes);
                }
                adicionar(event) {
                    event.preventDefault();
                    console.log(`Dados input's ${this._data.value} - ${this._quantidade.value} - ${this._valor.value}`);
                    const negociacao = new index_2.Negociacao(new Date(this._data.value.replace(/-/g, ",")), parseInt(this._quantidade.value), parseFloat(this._valor.value));
                    this._negociacoes.adicionar(negociacao);
                    this._negociacoes.negociacoes.forEach(n => console.log(n.toString()));
                    this._negociacaoView.update(this._negociacoes);
                    this._mensagemView.update("Negociação adicionada com sucesso.");
                }
                getElementoComSeletor(seletor) {
                    return document.querySelector(seletor);
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
