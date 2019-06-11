class NegociacaoController {

    /**
     * Outra forma de criar os atributos da classe, sem declara-los no construtor.
     */
    private _data: HTMLInputElement;
    private _quantidade: HTMLInputElement;
    private _valor: HTMLInputElement;

    constructor() {
        this._data = <HTMLInputElement>this.getElementoComSeletor("#data");
        this._quantidade = <HTMLInputElement>this.getElementoComSeletor("#quantidade");
        // <HTMLInputElement> é um cast.
        this._valor = <HTMLInputElement>this.getElementoComSeletor("#valor");
    }

    public adicionar(event: Event) {
        event.preventDefault();

        console.log(`Dados input's ${this._data.value} - ${this._quantidade.value} - ${this._valor.value}`);

        const negociacao = new Negociacao(
            new Date(this._data.value.replace("-",",")),
            parseInt(this._quantidade.value),
            parseFloat(this._valor.value)
        );

        console.log(negociacao);
    }

    private getElementoComSeletor(seletor: string) {
        return document.querySelector(seletor);
    }
}