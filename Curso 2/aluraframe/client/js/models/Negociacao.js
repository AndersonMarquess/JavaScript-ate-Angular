/**
 * EcmaScript 6 - criação de classe.
 */
class Negociacao {

    constructor(data, quantidade, valor) {
        /**
         * _data -> o underscore é uma convenção para que o valor da variável não seja alterada fora da classe.
         */
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        /**
         * "Congela" o estado do objeto, para manter a integridade das informações passadas no construtor.
         * Qualquer alteração feita nas variáveis serão descartadas.
         */
        Object.freeze(this);
    }

    /**
     * com o uso do "get" separado da palavra, podemos acessa-la usando apenas o nome do método:
     * variável.volume é a mesma coisa que variável.getVolume()
     */
    get volume() {
        return parseFloat((this._quantidade * this._valor).toFixed(2));
    }

    get data() {
        /**
         * Prática de programação defensiva, devolve uma nova variável com base no valor da variável presente na classe.
         * Caso o valor da variável devolvida seja alterada, sua mudança não será refletida no estado da classe.
         * Esta técnica pode ser empregada em qualquer objeto que tenha métodos que possam alterar seu valor.
         */
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    /**
     * Quando fora da classe, usamos o prefixo "function".
     * Dentro da classe nosso método só precisa do nome.
     */
    getValor() {
        return this._valor;
    }
}