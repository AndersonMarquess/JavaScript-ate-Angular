class MensagemView extends View {

    constructor(element) {
        super(element);
    }

    template() {
        //if ternário, verifica se possui texto na mensagem, se positivo a mensagem é impressa na tela.
        return super.dados.text ? `<p class="alert alert-info">${super.dados.text}</p>` : "<p></p>";
    }
}