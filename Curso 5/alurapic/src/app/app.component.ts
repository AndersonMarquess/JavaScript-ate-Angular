import { Component, OnInit } from '@angular/core';

import { PhotoService } from './photos/photo/photo.service';
import { Photo } from './photos/photo/Photo';

@Component({
	selector: 'app-root',
	// Template é o nome dado a parte html.
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
// nome do arquivo: app.component.ts
// nome da classe: AppComponent
export class AppComponent {
	title = 'alurapic';
	todasAsFotos: Photo[] = [];

	constructor(private photoService: PhotoService) {}

	ngOnInit(): void {
		this.photoService.buscarFotosDoUsuario("flavio").subscribe(
			// sucesso
			fotos => this.todasAsFotos = fotos,
			// erro
			erro => console.log(erro.message)
		);
	}
}
