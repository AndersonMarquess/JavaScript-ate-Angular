import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/Photo';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{

	constructor(private service: PhotoService) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> {
		// userName é o nome da variável definada na rota.
		const nomeUsuario = route.params.userName;
		return this.service.buscarFotosDoUsuario(nomeUsuario);
	}
}