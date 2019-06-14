System.register(["../views/index", "../models/index", "./DiaDaSemana", "../helpers/AnotacoesPersonalizadas", "../services/NegociacaoService"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, index_2, DiaDaSemana_1, AnotacoesPersonalizadas_1, NegociacaoService_1, NegociacaoController;
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
            },
            function (AnotacoesPersonalizadas_1_1) {
                AnotacoesPersonalizadas_1 = AnotacoesPersonalizadas_1_1;
            },
            function (NegociacaoService_1_1) {
                NegociacaoService_1 = NegociacaoService_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_2.ListaNegociacao();
                    this._negociacaoView = new index_1.NegociacaoView(this._getElementoComSeletor("#tabela-negociacoes"));
                    this._mensagemView = new index_1.MensagemView(this._getElementoComSeletor("#mensagemView"));
                    this._negociacaoService = new NegociacaoService_1.NegociacaoService();
                    this._data = this._getElementoComSeletor("#data");
                    this._quantidade = this._getElementoComSeletor("#quantidade");
                    this._valor = this._getElementoComSeletor("#valor");
                    this._negociacaoView.update(this._negociacoes);
                }
                adicionar() {
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
                    return data.getDay() == DiaDaSemana_1.DiaDaSemana.Sabado || data.getDay() == DiaDaSemana_1.DiaDaSemana.Domingo;
                }
                importarDadosAPI() {
                    this._negociacaoService.buscarNegociacaoAPI(verificarResposta)
                        .then((negociacoes) => {
                        negociacoes.forEach(n => this._negociacoes.adicionar(n));
                        this._negociacaoView.update(this._negociacoes);
                    });
                    function verificarResposta(res) {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    }
                }
            };
            __decorate([
                AnotacoesPersonalizadas_1.Throttle(),
                AnotacoesPersonalizadas_1.ImprimirTempoDeExecucao()
            ], NegociacaoController.prototype, "adicionar", null);
            __decorate([
                AnotacoesPersonalizadas_1.Throttle(500)
            ], NegociacaoController.prototype, "importarDadosAPI", null);
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
