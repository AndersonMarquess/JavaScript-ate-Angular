import { Component, OnInit } from '@angular/core';

import { Photo } from '../photo/Photo';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'ap-photo-list',
	templateUrl: './photo-list.component.html',
	styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

	todasAsFotosOrigem: Photo[] = [];
	filtro = '';

	constructor(private photoService: PhotoService,
		private rotaAtiva: ActivatedRoute) { }

	ngOnInit(): void {
		// Pegar o valor informado na rota -> this.rotaAtiva.snapshot.params.nomeDefinidoNaRota.
		const nomeUsuario = this.rotaAtiva.snapshot.params.userName;
		this.photoService.buscarFotosDoUsuario(nomeUsuario).subscribe(
			// sucesso
			fotos => this.todasAsFotosOrigem = fotos,
			// erro
			erro => console.log(erro.message)
		);
	}
}
