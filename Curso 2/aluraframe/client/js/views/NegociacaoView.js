class NegociacaoView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    update(listaDeNegociacoes) {
        let templateAtualiado = this._template(this._montarCorpoTabala(listaDeNegociacoes));
        this._elemento.innerHTML = templateAtualiado;
    }

    /**
     * O .map() vai devolver outro Array, então usamos o .join() para transformar todo o array em uma string.
     */
    _montarCorpoTabala(listaDeNegociacoes) {
        return `${
            listaDeNegociacoes.negociacoes.map(element =>
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

    _template(corpo) {
        return `<table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>DATA</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>VOLUME</th>
                        </tr>
                    </thead>

                    <tbody id="tbody-negociacao">
                        ${corpo}
                    </tbody>
                    <tfoot>
                    </tfoot>
                </table>`;
    }
}