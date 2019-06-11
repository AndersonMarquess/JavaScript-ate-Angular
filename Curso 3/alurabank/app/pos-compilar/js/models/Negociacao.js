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
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
}
