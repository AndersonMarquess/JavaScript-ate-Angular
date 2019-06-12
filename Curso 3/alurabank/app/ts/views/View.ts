/**
 * Ao exportar a classe ela se torna um módulo do EcmaScript6 (ES2015).
 * View usando generics.
 */
export abstract class View<T> {

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