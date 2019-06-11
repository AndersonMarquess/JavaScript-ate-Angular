class Negociacao {
    /**
     * Ao declarar a variável no construtor tipada com a definição de visibilidade,
     * criamos também os atributos da classe.
     */
    constructor(private _data: Date, private _quantidade: number, private _valor: number) { }

    public get data(): Date {
        return this._data;
    }

    public get quantidade(): number {
        return this._quantidade;
    }

    public get valor(): number {
        return this._valor;
    }
}