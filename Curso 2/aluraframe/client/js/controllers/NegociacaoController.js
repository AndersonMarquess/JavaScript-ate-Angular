class NegociacaoController {

    constructor() {
        /**
         * Adiciona a referência ao elemento na variável atributo, evitando buscas constates no DOM.
         */
        this._data = this.buscarValor("#data");
        this._quantidade = this.buscarValor("#quantidade");
        this._valor = this.buscarValor("#valor");
    }

    /**
     * Chamado ao fazer o submit do formulário.
     * @param {submit} event 
     */
    adicionar(event) {
        event.preventDefault();

        let negociacao = new Negociacao(
            this.obtemDataPorString(this._data.value),
            this._quantidade.value,
            this._valor.value
        );
        console.log(negociacao);
    }

    obtemDataPorString(stringData) {
        let dataSplit = stringData.split("-");
        let ano = dataSplit[0];
        /**
         * dado a string "35" o resultado de "35" - 2 é 33 em number.
         * O JavaScript faz a conversão da string para number.
         */
        let mes = dataSplit[1] - 1;
        let dia = dataSplit[2];
        return new Date(ano, mes, dia);
    }

    /**
     * Mapeia cada elemento do array para instrução escolhida.
     * Neste caso, recebe a string "2019-06-30" e retorna {"2019", 05, "30"}, 
     * considerando o mês como number.
     * É subtraído 1 do mês, por que o date considera (janeiro = 0) logo, (dezembro = 11).
     */
    obtemDataPorStringComMap(stringData) {
        //o índice está presente no foreach
        stringData.split("-").map((elemento, indice) => {
            if (indice == 1) {
                return elemento - 1;
            }
            return elemento;
        });

        // é o mesmo que :
        return stringData
            .split("-")
            .map((elemento, indice) => elemento - indice % 2); // Uma única instrução, o retorno é automático.
    }

    buscarValor(seletor) {
        console.log("Correu o dom para: " + seletor);
        return document.querySelector(seletor);
    }
}