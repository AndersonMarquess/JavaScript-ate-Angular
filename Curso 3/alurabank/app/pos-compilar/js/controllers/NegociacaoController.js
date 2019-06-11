class NegociacaoController {
    constructor() {
        this._data = this.getElementoComSeletor("#data");
        this._quantidade = this.getElementoComSeletor("#quantidade");
        // <HTMLInputElement> é um cast.
        this._valor = this.getElementoComSeletor("#valor");
    }
    adicionar(event) {
        event.preventDefault();
        console.log(`Dados input's ${this._data.value} - ${this._quantidade.value} - ${this._valor.value}`);
        const negociacao = new Negociacao(new Date(this._data.value.replace("-", ",")), parseInt(this._quantidade.value), parseFloat(this._valor.value));
        console.log(negociacao);
    }
    getElementoComSeletor(seletor) {
        return document.querySelector(seletor);
    }
}
