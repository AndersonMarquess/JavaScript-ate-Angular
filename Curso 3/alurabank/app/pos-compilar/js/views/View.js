var Views;
(function (Views) {
    class View {
        constructor(elemento) {
            this._elemento = elemento;
        }
        update(dados) {
            this._dados = dados;
            this._elemento.innerHTML = this.template();
        }
        get dados() {
            return this._dados;
        }
    }
    Views.View = View;
})(Views || (Views = {}));
