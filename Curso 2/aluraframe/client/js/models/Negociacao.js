/**
 * EcmaScript 6 - criação de classe.
 */
class Negociacao {

    constructor(data, quantidade, valor) {
        /**
         * _data -> o underscore é uma convenção para que o valor da variável não seja alterada fora da classe.
         */
        this._data = data;
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
     * variável.volume é a mesma coisa que, variável.getVolume()
     */
    get volume() {
        return (this._quantidade * this._valor).toFixed(2);
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    /**
     * Quando fora da classe, usamos o prefixo "function".
     * Dentro da classe, nosso método só precisa do nome.
     */
    getValor() {
        return this._valor;
    }
}