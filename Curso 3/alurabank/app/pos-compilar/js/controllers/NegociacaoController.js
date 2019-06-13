System.register(["../views/index", "../models/index", "./DiaDaSemana"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, DiaDaSemana_1, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (DiaDaSemana_1_1) {
                DiaDaSemana_1 = DiaDaSemana_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.ListaNegociacao();
                    this._negociacaoView = new index_1.NegociacaoView(this._getElementoComSeletor("#tabela-negociacoes"));
                    this._mensagemView = new index_1.MensagemView(this._getElementoComSeletor("#mensagemView"));
                    this._data = this._getElementoComSeletor("#data");
                    this._quantidade = this._getElementoComSeletor("#quantidade");
                    this._valor = this._getElementoComSeletor("#valor");
                    this._negociacaoView.update(this._negociacoes);
                }
                adicionar(event) {
                    event.preventDefault();
                    console.log(`Dados input's ${this._data.value} - ${this._quantidade.value} - ${this._valor.value}`);
                    const data = new Date(this._data.value.replace(/-/g, ","));
                    if (this._isFinalDeSamana(data)) {
                        alert('Não é permitida criar negociação fora de dias úteis.');
                        return;
                    }
                    const negociacao = this._criarNegociacao(data);
                    this._negociacoes.adicionar(negociacao);
                    this._negociacoes.negociacoes.forEach(n => console.log(n.toString()));
                    this._negociacaoView.update(this._negociacoes);
                    this._mensagemView.update("Negociação adicionada com sucesso.");
                }
                _getElementoComSeletor(seletor) {
                    return document.querySelector(seletor);
                }
                _criarNegociacao(data) {
                    return new index_2.Negociacao(data, parseInt(this._quantidade.value), parseFloat(this._valor.value));
                }
                _isFinalDeSamana(data) {
                    return data.getDay() == DiaDaSemana_1.DiaDaSemana.Domingo || data.getDay() == DiaDaSemana_1.DiaDaSemana.Sabado;
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
