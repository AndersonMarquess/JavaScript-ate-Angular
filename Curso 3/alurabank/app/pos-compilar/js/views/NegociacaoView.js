System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var View_1, NegociacaoView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            NegociacaoView = class NegociacaoView extends View_1.View {
                template() {
                    return `<table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                    ${this.montarTrsComNegociacoes()}
                </tbody>

                <tfoot>
                    <td colspan=3></td>
                    <td>${this.calcularVolumeTotal()}</td>
                </tfoot>
            </table>`;
                }
                montarTrsComNegociacoes() {
                    return this.dados.negociacoes.map(n => `<tr>
                    <td>${n.data.toLocaleDateString()}</td>
                    <td>${n.quantidade}</td>
                    <td>${n.valor}</td>
                    <td>${n.volume}</td>
                </tr>`).join('');
                }
                calcularVolumeTotal() {
                    return this.dados.negociacoes.reduce((sigma, negociacao) => sigma + negociacao.volume, 0);
                }
            };
            exports_1("NegociacaoView", NegociacaoView);
        }
    };
});
