class NegociacaoController {

    constructor() {
        /**
         * Adiciona a referência ao elemento na variável atributo, evitando buscas constates no DOM.
         */
        this._data = this.buscarValor("#data");
        this._quantidade = this.buscarValor("#quantidade");
        this._valor = this.buscarValor("#valor");
        this._listaNegociacoes = new ListaNegocicao();

        this._negociacaoView = new NegociacaoView(this.buscarValor("#negociacaoView"));
        this._negociacaoView.update(this._listaNegociacoes);
    }

    /**
     * Chamado ao fazer o submit do formulário.
     * @param {submit} event 
     */
    adicionar(event) {
        event.preventDefault();

        let negociacao = this._criarNegociacao();
        this._listaNegociacoes.adicionar(negociacao);

        this._negociacaoView.update(this._listaNegociacoes);
        this._limparFormulario();
    }

    _criarNegociacao() {
        return new Negociacao(
            DataHelper.textoParaData(this._data.value),
            this._quantidade.value,
            this._valor.value
        );
    }

    buscarValor(seletor) {
        console.log("Correu o dom para: " + seletor);
        return document.querySelector(seletor);
    }

    /**
     * underscore para indicar que este método só pode ser usado dentro da classe NegociacaoController.
     */
    _limparFormulario() {
        this._data.value = "";
        this._quantidade.value = 1;
        this._valor.value = 0.0;

        this._data.focus();
    }
}