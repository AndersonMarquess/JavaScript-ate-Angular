import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/Photo';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

	constructor(private service: PhotoService) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
		// userName é o nome da variável definida na rota.
		const nomeUsuario = route.params.userName;
		const numPgInicial = 1;
		return this.service.buscarFotosDoUsuarioComPaginacao(nomeUsuario, numPgInicial);
	}
}