System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, MensagemView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            MensagemView = class MensagemView extends View_1.View {
                template() {
                    return this.dados ? `<p class="alert alert-info">${this.dados}</p>` : `<p></p>`;
                }
            };
            exports_1("MensagemView", MensagemView);
        }
    };
});
