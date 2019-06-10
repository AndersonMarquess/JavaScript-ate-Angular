class View {
    constructor(elemento) {
        this._dados;
        this._elemento = elemento;
    }

    get dados() {
        return this._dados;
    }

    update(dados) {
        this._dados = dados;
        this._elemento.innerHTML = this.template();
    }

    /**
     * Não é possível usar métodos abstratos em javascript(EcmaScript 6).
     * Lança um erro para "obrigar" a implementação.
     */
    template() {
        throw new Error("Você deve implementar o template.");
    }
}