class NegociacaoController {

    constructor() {
        /**
         * Adiciona a referência ao elemento na variável atributo, evitando buscas constates no DOM.
         */
        this._data = this.buscarValor("#data");
        this._quantidade = this.buscarValor("#quantidade");
        this._valor = this.buscarValor("#valor");
    }

    /**
     * Chamado ao fazer o submit do formulário.
     * @param {submit} event 
     */
    adicionar(event) {
        event.preventDefault();

        let negociacao = new Negociacao(
            DataHelper.textoParaData(this._data.value),
            this._quantidade.value,
            this._valor.value
        );
        console.log(negociacao);
    }

    buscarValor(seletor) {
        console.log("Correu o dom para: " + seletor);
        return document.querySelector(seletor);
    }
}