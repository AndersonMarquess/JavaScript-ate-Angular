import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/Photo';
import { PhotoService } from '../photo/photo.service';

@Component({
	selector: 'ap-photo-list',
	templateUrl: './photo-list.component.html',
	styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

	todasAsFotosOrigem: Photo[] = [];
	filtro = '';
	possuiMaisOrigem = true;
	nomeUsuario = '';
	paginaAtual = 1;

	constructor(private rotaAtiva: ActivatedRoute,
		private service: PhotoService) { }

	ngOnInit(): void {
		// sempre que mudar o valor do parâmetro na rota, ele chama os novos dados.
		this.rotaAtiva.params.subscribe(mudouRota => {
			// pega o valor retornado pelo resolver desta rota.
			// 'fotosOrigemResolver' variável definida na rota.
			this.todasAsFotosOrigem = this.rotaAtiva.snapshot.data['fotosOrigemResolver'];
			this.nomeUsuario = this.rotaAtiva.snapshot.params.userName;
		});
	}

	carregarFotos() {
		this.service
			.buscarFotosDoUsuarioComPaginacao(this.nomeUsuario, ++this.paginaAtual)
			.subscribe(fotosResposta => {
				//limpa o filtro
				this.filtro = '';

				// é preciso associar uma nova referência para que o @Input seja atualizado.
				this.todasAsFotosOrigem = this.todasAsFotosOrigem.concat(fotosResposta);
				if (fotosResposta.length == 0) this.possuiMaisOrigem = false;
			});
	}
}
