export class Negociacao {
    /**
     * Ao declarar a variável no construtor tipada com a definição de visibilidade,
     * criamos também os atributos da classe.
     * Variáveis do tipo readonly, podem ser acessadas fora da classe, mas não podem ser alterada.
     */
    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) { }

    public toString(): string {
        return `Data: ${this.data.toLocaleDateString()}\nQuantidade: ${this.quantidade}\nValor: ${this.valor}`
    }

    public get volume(): number {
        return this.quantidade * this.valor;
    }
}