import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Photo } from './Photo';

@Injectable({
	// root - quando o angular injetar o PhotoService, 
	// a mesma instância será disponibilizada para qualquer componente. (singleton)
	providedIn: 'root'
})
export class PhotoService {

	// injeção de dependência do HttpClient, necessário importar seu módulo no app.module.ts.
	constructor(private httpClient: HttpClient) { }

	public buscarFotosDoUsuario(nomeUsuario: string): Observable<Photo[]> {
		const observable = this.httpClient.get<Photo[]>(`http://localhost:3000/${nomeUsuario}/photos`);
		// o Observable só fará o get, se alguem estiver subscrito.
		return observable;
	}
}