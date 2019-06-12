class MensagemView extends View {
    template() {
        return this.dados ? `<p class="alert alert-info">${this.dados}</p>` : `<p></p>`;
    }
}
