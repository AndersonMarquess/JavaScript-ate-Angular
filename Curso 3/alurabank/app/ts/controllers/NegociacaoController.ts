class NegociacaoController {

    /**
     * Outra forma de criar os atributos da classe, sem declara-los no construtor.
     */
    private _data: HTMLInputElement;
    private _quantidade: HTMLInputElement;
    private _valor: HTMLInputElement;
    //é o mesmo que _negociacoes = new ListaNegociacao() inferência de tipo.
    private _negociacoes: ListaNegociacao = new ListaNegociacao();

    constructor() {
        this._data = <HTMLInputElement>this.getElementoComSeletor("#data");
        this._quantidade = <HTMLInputElement>this.getElementoComSeletor("#quantidade");
        // <HTMLInputElement> é um cast.
        this._valor = <HTMLInputElement>this.getElementoComSeletor("#valor");
    }

    public adicionar(event: Event): void {
        event.preventDefault();

        console.log(`Dados input's ${this._data.value} - ${this._quantidade.value} - ${this._valor.value}`);

        const negociacao = new Negociacao(
            //Corrige o problema de replace da data no firefox.
            new Date(this._data.value.replace(/-/g,",")),
            parseInt(this._quantidade.value),
            parseFloat(this._valor.value)
        );

        this._negociacoes.adicionar(negociacao);
        this._negociacoes.negociacoes.forEach(n => console.log(n.toString()));
    }

    private getElementoComSeletor(seletor: string): Element {
        return document.querySelector(seletor);
    }
}