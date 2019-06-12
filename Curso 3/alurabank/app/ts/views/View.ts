/**
 * View usando generics
 */
abstract class View<T> {

    private _elemento: Element;
    private _dados: T;

    constructor(elemento: Element) {
        this._elemento = elemento;
    }

    public update(dados: T): void {
        this._dados = dados;
        this._elemento.innerHTML = this.template();
    }

    protected abstract template(): string;

    protected get dados(): T {
        return this._dados;
    }
}