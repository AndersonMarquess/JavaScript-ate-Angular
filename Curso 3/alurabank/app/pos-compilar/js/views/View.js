System.register([], function (exports_1, context_1) {
    "use strict";
    var View;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(elemento) {
                    this._elemento = elemento;
                }
                update(dados) {
                    this._dados = dados;
                    this._elemento.innerHTML = this.template();
                }
                get dados() {
                    return this._dados;
                }
            };
            exports_1("View", View);
        }
    };
});
