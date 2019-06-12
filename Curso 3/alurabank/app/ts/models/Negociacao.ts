class Negociacao {
    /**
     * Ao declarar a variável no construtor tipada com a definição de visibilidade,
     * criamos também os atributos da classe.
     */
    constructor(private _data: Date, private _quantidade: number, private _valor: number) { }

    public get data(): Date {
        return new Date(this._data.getTime());
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public get valor(): number {
        return this._valor;
    }

    public toString(): string {
        return `Data: ${this.data.toLocaleDateString()}\nQuantidade: ${this._quantidade}\nValor: ${this.valor}`
    }

    public get volume(): number {
        return this._quantidade * this._valor;
    }
}