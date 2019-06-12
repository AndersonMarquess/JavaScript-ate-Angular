abstract class View {

    private _elemento: Element;
    private _dados: any;

    constructor(elemento: Element) {
        this._elemento = elemento;
    }

    public update(dados: any): void {
        this._dados = dados;
        this._elemento.innerHTML = this.template();
    }

    protected abstract template(): string;

    protected get dados(): any {
        return this._dados;
    }
}