var Views;
(function (Views) {
    class MensagemView extends Views.View {
        template() {
            return this.dados ? `<p class="alert alert-info">${this.dados}</p>` : `<p></p>`;
        }
    }
    Views.MensagemView = MensagemView;
})(Views || (Views = {}));
