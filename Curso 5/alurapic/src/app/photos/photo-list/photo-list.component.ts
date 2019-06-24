import { Component, OnInit } from '@angular/core';

import { Photo } from '../photo/Photo';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'ap-photo-list',
	templateUrl: './photo-list.component.html',
	styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

	todasAsFotosOrigem: Photo[] = [];
	filtro = '';

	constructor(private rotaAtiva: ActivatedRoute) { }

	ngOnInit(): void {
		// pega o valor retornado pelo resolver desta rota.
		// 'fotosOrigemResolver' variável definada na rota.
		this.todasAsFotosOrigem = this.rotaAtiva.snapshot.data['fotosOrigemResolver'];
	}
}
