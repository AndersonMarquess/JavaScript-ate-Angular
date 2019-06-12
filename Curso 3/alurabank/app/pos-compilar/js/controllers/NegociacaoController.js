class NegociacaoController {
    constructor() {
        //é o mesmo que _negociacoes = new ListaNegociacao() inferência de tipo.
        this._negociacoes = new ListaNegociacao();
        this._negociacaoView = new NegociacaoView(this.getElementoComSeletor("#tabela-negociacoes"));
        this._data = this.getElementoComSeletor("#data");
        this._quantidade = this.getElementoComSeletor("#quantidade");
        // <HTMLInputElement> é um cast.
        this._valor = this.getElementoComSeletor("#valor");
        this._negociacaoView.update(this._negociacoes);
    }
    adicionar(event) {
        event.preventDefault();
        console.log(`Dados input's ${this._data.value} - ${this._quantidade.value} - ${this._valor.value}`);
        const negociacao = new Negociacao(
        //Corrige o problema de replace da data no firefox.
        new Date(this._data.value.replace(/-/g, ",")), parseInt(this._quantidade.value), parseFloat(this._valor.value));
        this._negociacoes.adicionar(negociacao);
        this._negociacoes.negociacoes.forEach(n => console.log(n.toString()));
        this._negociacaoView.update(this._negociacoes);
    }
    getElementoComSeletor(seletor) {
        return document.querySelector(seletor);
    }
}
