import { View } from './View';

export class MensagemView extends View<string> {

    protected template(): string {
        return this.dados ? `<p class="alert alert-info">${this.dados}</p>` : `<p></p>`;
    }
}