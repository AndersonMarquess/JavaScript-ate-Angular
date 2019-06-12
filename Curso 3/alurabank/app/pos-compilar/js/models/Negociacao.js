class Negociacao {
    /**
     * Ao declarar a variável no construtor tipada com a definição de visibilidade,
     * criamos também os atributos da classe.
     */
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    toString() {
        return `Data: ${this.data.toLocaleDateString()}\nQuantidade: ${this._quantidade}\nValor: ${this.valor}`;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
