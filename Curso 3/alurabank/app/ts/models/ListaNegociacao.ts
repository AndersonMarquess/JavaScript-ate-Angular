import { Negociacao } from './Negociacao';

export class ListaNegociacao {

    // Array<Negociacao> é o mesmo que Negociacao[]
    private _negociacoes: Array<Negociacao> = [];

    public adicionar(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    public get negociacoes(): Negociacao[] {
        return [].concat(this._negociacoes);
    }
}