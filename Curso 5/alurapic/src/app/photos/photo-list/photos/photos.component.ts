import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/Photo';

@Component({
	selector: 'ap-photos',
	templateUrl: './photos.component.html',
	styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

	// @Input() Recebe dados na hora da declaração do componente nas templates.
	@Input() todasAsFotosDestino: Photo[] = [];

	rowsFotos = [];

	constructor() { }

	// método chamado quando o valor de uma propriedade inbound mudar. <ap-photos [propriedade]="xtop"></ap-photos>
	ngOnChanges(mudancas: SimpleChanges) {
		//Se houver uma mudança, haverá a propriedade que foi alterada dentro da variável mudança.
		//neste caso, verificamso se existe a propriedade todasAsFotosDestino.
		if (mudancas.todasAsFotosDestino) {
			this.montarLinhasDoGrid();
		}
	}

	private montarLinhasDoGrid(): void {
		let rowsFiltrado = [];
		for (let i = 0; i < this.todasAsFotosDestino.length; i += 3) {
			// array.slice retorna uma cópia da parte de um array, com o inicio e fim (não inclusivo) especificados.
			// neste caso, todas as fotos de 0 até 2, de 3 até 5, de 6 até 8 e assim sucessivamente.
			rowsFiltrado.push(this.todasAsFotosDestino.slice(i, i + 3));
		}
		this.rowsFotos = rowsFiltrado;
	}
}
