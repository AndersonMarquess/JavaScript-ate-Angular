import { Component, OnInit } from '@angular/core';

import { Photo } from '../photo/Photo';
import { PhotoService } from '../photo/photo.service';

@Component({
	selector: 'app-photo-list',
	templateUrl: './photo-list.component.html',
	styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

	todasAsFotos: Photo[] = [];

	constructor(private photoService: PhotoService) { }

	ngOnInit(): void {
		this.photoService.buscarFotosDoUsuario("flavio").subscribe(
			// sucesso
			fotos => this.todasAsFotos = fotos,
			// erro
			erro => console.log(erro.message)
		);
	}

}
