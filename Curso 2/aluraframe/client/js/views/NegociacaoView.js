class NegociacaoView extends View {

    constructor(element) {
        super(element);
    }

    /**
     * O .map() vai devolver outro Array, então usamos o .join() para transformar todo o array em uma string.
     */
    _montarCorpoTabala() {
        return `${
            super.dados.negociacoes.map(element =>
                this._criarTrComElemento(element)
            ).join('')
        }`;
    }

    _criarTrComElemento(element) {
        return `<tr>
                    <td>${DataHelper.dataParaTexto(element.data)}</td>
                    <td>${element.quantidade}</td>
                    <td>${element.getValor()}</td>
                    <td>${element.volume}</td>
                </tr>`;
    }

    _calcularVolumeTotal() {
        // Reduce processa um array e retorna um único resultado.
        // valorInicial vai acumular a soma do volume de cada negociação, esta variável é iniciada com valor 0.0
        return super.dados.negociacoes.reduce((valorInicial, negoc) => valorInicial + negoc.volume, 0.0);
    }

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
                        ${this._montarCorpoTabala()}
                    </tbody>

                    <tfoot>
                        <td colspan="3"></td>
                        <td>${this._calcularVolumeTotal()}</td>
                    </tfoot>
                </table>`;
    }
}