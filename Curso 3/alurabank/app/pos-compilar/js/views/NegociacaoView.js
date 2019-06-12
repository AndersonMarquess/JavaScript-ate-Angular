class NegociacaoView extends View {
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
        let _negociacoes = this.dados;
        return _negociacoes.negociacoes.map(n => `<tr>
                <td>${n.data.toLocaleDateString()}</td>
                <td>${n.quantidade}</td>
                <td>${n.valor}</td>
                <td>${n.volume}</td>
            </tr>`).join('');
    }
    calcularVolumeTotal() {
        let _negociacoes = this.dados;
        return _negociacoes.negociacoes.reduce((sigma, negociacao) => sigma + negociacao.volume, 0);
    }
}
