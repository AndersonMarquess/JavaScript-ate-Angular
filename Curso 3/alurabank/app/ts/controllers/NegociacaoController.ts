//Barrel para simplificar imports
import { MensagemView, NegociacaoView } from '../views/index';
import { ListaNegociacao, Negociacao } from '../models/index';
import { DiaDaSemana } from './DiaDaSemana';
import { ImprimirTempoDeExecucao, Throttle } from "../helpers/AnotacoesPersonalizadas";
import { NegociacaoService } from "../services/NegociacaoService";

export class NegociacaoController {
    /**
     * Outra forma de criar os atributos da classe, sem declara-los no construtor.
     */
    private _data: HTMLInputElement;
    private _quantidade: HTMLInputElement;
    private _valor: HTMLInputElement;
    //é o mesmo que _negociacoes = new ListaNegociacao() inferência de tipo.
    private _negociacoes: ListaNegociacao = new ListaNegociacao();
    private _negociacaoView = new NegociacaoView(this._getElementoComSeletor("#tabela-negociacoes"));
    private _mensagemView = new MensagemView(this._getElementoComSeletor("#mensagemView"));

    private _negociacaoService = new NegociacaoService();

    constructor() {
        this._data = <HTMLInputElement>this._getElementoComSeletor("#data");
        this._quantidade = <HTMLInputElement>this._getElementoComSeletor("#quantidade");
        // <HTMLInputElement> é um cast.
        this._valor = <HTMLInputElement>this._getElementoComSeletor("#valor");
        this._negociacaoView.update(this._negociacoes);
    }

    @Throttle()
    @ImprimirTempoDeExecucao()
    public adicionar(): void {
        //event é implícito
        //event.preventDefault();

        console.log(`Dados input's ${this._data.value} - ${this._quantidade.value} - ${this._valor.value}`);

        //Corrige o problema de replace da data no firefox.
        const data = new Date(this._data.value.replace(/-/g, ","));

        if (this._isFinalDeSamana(data)) {
            alert('Não é permitida criar negociação fora de dias úteis.');
            return;
        }

        const negociacao = this._criarNegociacao(data);

        this._negociacoes.adicionar(negociacao);
        this._negociacoes.negociacoes.forEach(n => console.log(n.toString()));
        this._negociacaoView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso.");
    }

    private _getElementoComSeletor(seletor: string): Element {
        return document.querySelector(seletor);
    }

    private _criarNegociacao(data: Date) {
        return new Negociacao(data, parseInt(this._quantidade.value), parseFloat(this._valor.value));
    }

    private _isFinalDeSamana(data: Date): boolean {
        return data.getDay() == DiaDaSemana.Sabado || data.getDay() == DiaDaSemana.Domingo;
    }

    @Throttle(500)
    public importarDadosAPI(): void {

        this._negociacaoService.buscarNegociacaoAPI(verificarResposta)
            .then((negociacoes: Negociacao[]) => {
                negociacoes.forEach(n => this._negociacoes.adicionar(n));
                this._negociacaoView.update(this._negociacoes);
            });

        function verificarResposta(res: Response) {
            if (res.ok) {
                return res;
            } else {
                throw new Error(res.statusText);
            }
        }
    }
}