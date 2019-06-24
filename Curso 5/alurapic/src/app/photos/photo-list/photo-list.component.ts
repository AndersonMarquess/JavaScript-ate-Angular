import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from "rxjs/operators";
import { Subject } from 'rxjs';

import { Photo } from '../photo/Photo';
import { PhotoService } from '../photo/photo.service';

@Component({
	selector: 'ap-photo-list',
	templateUrl: './photo-list.component.html',
	styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

	todasAsFotosOrigem: Photo[] = [];
	filtro = '';
	debounce = new Subject<string>();
	possuiMaisOrigem = true;
	nomeUsuario = '';
	paginaAtual = 1;

	constructor(private rotaAtiva: ActivatedRoute,
		private service: PhotoService) { }

	ngOnInit(): void {
		// pega o valor retornado pelo resolver desta rota.
		// 'fotosOrigemResolver' variável definida na rota.
		this.todasAsFotosOrigem = this.rotaAtiva.snapshot.data['fotosOrigemResolver'];
		this.debounce
			// debounceTime -> o evento não é invocado a cada keyup e sim após 300ms do ultimo keyup.
			.pipe(debounceTime(300))
			.subscribe((filtro: string) => this.filtro = filtro);

		this.nomeUsuario = this.rotaAtiva.snapshot.params.userName;
	}

	ngOnDestroy() {
		// Quando sairmos do componente ele desliga a escuta do debounce.
		this.debounce.unsubscribe();
	}

	carregarFotos() {
		this.service
			.buscarFotosDoUsuarioComPaginacao(this.nomeUsuario, ++this.paginaAtual)
			.subscribe(fotosResposta => {
				// é preciso associar uma nova referência para que o @Input seja atualizado.
				this.todasAsFotosOrigem = this.todasAsFotosOrigem.concat(fotosResposta);
				if (fotosResposta.length == 0) this.possuiMaisOrigem = false;
			});
	}
}
