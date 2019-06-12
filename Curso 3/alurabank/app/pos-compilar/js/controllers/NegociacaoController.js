System.register(["../views/MensagemView", "../views/NegociacaoView", "../models/ListaNegociacao", "../models/Negociacao"], function (exports_1, context_1) {
    "use strict";
    var MensagemView_1, NegociacaoView_1, ListaNegociacao_1, Negociacao_1, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            },
            function (NegociacaoView_1_1) {
                NegociacaoView_1 = NegociacaoView_1_1;
            },
            function (ListaNegociacao_1_1) {
                ListaNegociacao_1 = ListaNegociacao_1_1;
            },
            function (Negociacao_1_1) {
                Negociacao_1 = Negociacao_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new ListaNegociacao_1.ListaNegociacao();
                    this._negociacaoView = new NegociacaoView_1.NegociacaoView(this.getElementoComSeletor("#tabela-negociacoes"));
                    this._mensagemView = new MensagemView_1.MensagemView(this.getElementoComSeletor("#mensagemView"));
                    this._data = this.getElementoComSeletor("#data");
                    this._quantidade = this.getElementoComSeletor("#quantidade");
                    this._valor = this.getElementoComSeletor("#valor");
                    this._negociacaoView.update(this._negociacoes);
                }
                adicionar(event) {
                    event.preventDefault();
                    console.log(`Dados input's ${this._data.value} - ${this._quantidade.value} - ${this._valor.value}`);
                    const negociacao = new Negociacao_1.Negociacao(new Date(this._data.value.replace(/-/g, ",")), parseInt(this._quantidade.value), parseFloat(this._valor.value));
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
