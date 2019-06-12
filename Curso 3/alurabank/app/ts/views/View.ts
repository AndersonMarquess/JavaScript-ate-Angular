/**
 * O namespace é usadas para agrupar todas as classes que são *exportadas* em um só lugar.
 * se quisermos saber quais as views temos disponíveis, basta colocar todas dentro do mesmo namespace (usando o mesmo nome para todos).
 * Para usar uma view dentro de um namespace, basta escrever: nomeDoNamespace.classesDisponiveis
 * Ex: Views.View;
 */
namespace Views {
    /**
     * View usando generics
     */
    export abstract class View<T> {

        private _elemento: Element;
        private _dados: T;

        constructor(elemento: Element) {
            this._elemento = elemento;
        }

        public update(dados: T): void {
            this._dados = dados;
            this._elemento.innerHTML = this.template();
        }

        protected abstract template(): string;

        protected get dados(): T {
            return this._dados;
        }
    }
}