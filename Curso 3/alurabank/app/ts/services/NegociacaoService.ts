import { Negociacao, NegociacaoLegada } from "../models/index";

export class NegociacaoService {
    public buscarNegociacaoAPI(exceptionHandler: ExceptionHandler): Promise<void | Negociacao[]> {
        //funciona como o XMLHttpRequest 
        //Buscar informações no endpoint
        return fetch('http://localhost:8080/dados')
            //verificar conteúdo da resposta
            .then(resp => exceptionHandler(resp))
            //transformar resposta em json
            .then(resp => resp.json())
            //transformar dados do json em negociação e adicionar na lista de negociação
            .then((dados: NegociacaoLegada[]) =>
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            // coleta o throw error caso exista.
            .catch(erro => console.log(erro));
    }
}

export interface ExceptionHandler {
    (response: Response): Response;
}