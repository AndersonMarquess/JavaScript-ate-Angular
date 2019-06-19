import { Component, Input } from '@angular/core';

@Component({
	// ap de "alurapic", é um prefixo, boa prática para evitar problemas com seletor.
	selector: "ap-photo",
	templateUrl: "photo.component.html"
})
export class PhotoComponent {
	// @Input() permite que o valor da variável seja informada na hora da declaração do component ap-photo (esse componente).
	// para que o valor seja recebido, o nome da propriedade na hora da declaração, deve ser o mesmo que a variável (propriedade) do componente alvo.
	// Ex: <ap-photo urlImg='' imgDescricao=''></ap-photo>
	@Input() urlImg = '';
	@Input() imgDescricao = '';
}