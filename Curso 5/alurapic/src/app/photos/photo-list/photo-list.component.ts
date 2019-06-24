import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";

import { Photo } from '../photo/Photo';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'ap-photo-list',
	templateUrl: './photo-list.component.html',
	styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

	todasAsFotosOrigem: Photo[] = [];
	filtro = '';
	debounce = new Subject<string>();

	constructor(private rotaAtiva: ActivatedRoute) { }

	ngOnInit(): void {
		// pega o valor retornado pelo resolver desta rota.
		// 'fotosOrigemResolver' variável definada na rota.
		this.todasAsFotosOrigem = this.rotaAtiva.snapshot.data['fotosOrigemResolver'];
		this.debounce
			// debounceTime -> o evento não é invocado a cada keyup e sim após 300ms do ultimo keyup.
			.pipe(debounceTime(300))
			.subscribe((filtro: string) => this.filtro = filtro);
	}

	ngOnDestroy() {
		// Quando sairmos do componente ele desliga a escuta do debounce.
		this.debounce.unsubscribe();
	}
}
