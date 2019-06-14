System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacao;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacao = class Negociacao {
                constructor(data, quantidade, valor) {
                    this.data = data;
                    this.quantidade = quantidade;
                    this.valor = valor;
                }
                toString() {
                    return `Data: ${this.data.toLocaleDateString()}\nQuantidade: ${this.quantidade}\nValor: ${this.valor}`;
                }
                get volume() {
                    return this.quantidade * this.valor;
                }
                isIgual(outro) {
                    return this.data.toLocaleDateString().includes(outro.data.toLocaleDateString())
                        && this.quantidade == outro.quantidade
                        && this.valor == outro.valor;
                }
            };
            exports_1("Negociacao", Negociacao);
        }
    };
});
