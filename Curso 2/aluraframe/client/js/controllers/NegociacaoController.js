class NegociacaoController {

    constructor() {
        /**
         * Adiciona a referência ao elemento na variável atributo, evitando buscas constates no DOM.
         */
        this.data = this.buscarValor("#data");
        this.quantidade = this.buscarValor("#quantidade");
        this.valor = this.buscarValor("#valor");
    }

    /**
     * Chamado ao fazer o submit do formulário.
     * @param {submit} event 
     */
    adicionar(event) {
        event.preventDefault();

        console.log(this.data.value);
        console.log(this.quantidade.value);
        console.log(this.valor.value);
    }

    buscarValor(seletor) {
        console.log("Correu o dom para: " + seletor);
        return document.querySelector(seletor);
    }
}