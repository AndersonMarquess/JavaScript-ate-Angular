import { Component, Input } from '@angular/core';

const CLOUD = "http://localhost:3000/imgs/";

@Component({
	// ap de "alurapic", é um prefixo, boa prática para evitar problemas com seletor.
	selector: "ap-photo",
	templateUrl: "photo.component.html"
})
export class PhotoComponent {
	// @Input() permite que o valor da variável seja informada na hora da declaração do component ap-photo (esse componente).
	// para que o valor seja recebido, o nome da propriedade na hora da declaração, deve ser o mesmo que a variável (propriedade) do componente alvo.
	// Ex: <ap-photo urlImg='' imgDescricao=''></ap-photo>
	private _urlImg = "";

	@Input() set urlImg(urlImg: string) {
		if (urlImg.startsWith('data')) {
			this._urlImg = urlImg;
		} else {
			// coloca o endereço do clound antes da imagem
			this._urlImg = CLOUD + urlImg;
		}
	}

	get urlImg(): string {
		return this._urlImg;
	}

	// funciona igual ao getter e setter.
	@Input() imgDescricao = '';
}