class ListaNegociacao {
    constructor() {
        // Array<Negociacao> é o mesmo que Negociacao[]
        this._negociacoes = [];
    }
    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
    }
    get negociacoes() {
        return [].concat(this._negociacoes);
    }
}
