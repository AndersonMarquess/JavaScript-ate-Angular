class NegociacaoController {
    constructor() {
        this._negociacoes = new ListaNegociacao();
        this._negociacaoView = new NegociacaoView(this.getElementoComSeletor("#tabela-negociacoes"));
        this._mensagemView = new MensagemView(this.getElementoComSeletor("#mensagemView"));
        this._data = this.getElementoComSeletor("#data");
        this._quantidade = this.getElementoComSeletor("#quantidade");
        this._valor = this.getElementoComSeletor("#valor");
        this._negociacaoView.update(this._negociacoes);
    }
    adicionar(event) {
        event.preventDefault();
        console.log(`Dados input's ${this._data.value} - ${this._quantidade.value} - ${this._valor.value}`);
        const negociacao = new Negociacao(new Date(this._data.value.replace(/-/g, ",")), parseInt(this._quantidade.value), parseFloat(this._valor.value));
        this._negociacoes.adicionar(negociacao);
        this._negociacoes.negociacoes.forEach(n => console.log(n.toString()));
        this._negociacaoView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso.");
    }
    getElementoComSeletor(seletor) {
        return document.querySelector(seletor);
    }
}
