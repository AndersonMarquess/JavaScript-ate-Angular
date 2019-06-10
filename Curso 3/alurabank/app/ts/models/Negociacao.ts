class Negociacao {

    private _data: Date;
    private _quantidade: Number;
    private _valor: Number;

    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    public get data(): Date {
        return this._data;
    }

    public get quantidade(): Number {
        return this._quantidade;
    }

    public get valor(): Number {
        return this._valor;
    }
}