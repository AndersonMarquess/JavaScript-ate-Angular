System.register([], function (exports_1, context_1) {
    "use strict";
    var ListaNegociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            ListaNegociacao = class ListaNegociacao {
                constructor() {
                    this._negociacoes = [];
                }
                adicionar(negociacao) {
                    this._negociacoes.push(negociacao);
                }
                get negociacoes() {
                    return [].concat(this._negociacoes);
                }
            };
            exports_1("ListaNegociacao", ListaNegociacao);
        }
    };
});
