class DataHelper {

    constructor() {
        throw new Error("Esta classe não pode ser instanciada.");
    }

    static dataParaTexto(data) {
        return data.toLocaleDateString();
    }

    static validarTexoData(texto) {
        let regExp = new RegExp(/\d{4}-\d{2}-\d{2}/);
        if(!regExp.test(texto)) {
            throw new Error(`O texto ${texto} não possui um padrão válido (ex: "2019-06-30").`);
        }
    }

    /**
     * Recebe: "2019-06-30"
     * Retorna: new Date.
     */
    static textoParaData(textoData) {
        this.validarTexoData(textoData);
        let dataSplit = textoData.split("-");
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
    static textoParaDataComMap(textoData) {
        this.validarTexoData(textoData);

        //o índice está presente no foreach
        textoData.split("-").map((elemento, indice) => {
            if (indice == 1) {
                return elemento - 1;
            }
            return elemento;
        });

        // é o mesmo que :
        let dataObtida = textoData
            .split("-")
            .map((elemento, indice) => elemento - indice % 2); // Uma única instrução, o retorno é automático.

        return new Date(dataObtida);
    }
}