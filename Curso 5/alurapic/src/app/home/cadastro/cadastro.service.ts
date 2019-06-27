import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "http://localhost:3000";

@Injectable({ providedIn: "root" })
export class cadastroService {

	constructor(private httpClient: HttpClient) { }

	isNomeUsuarioDisponivel(nomeUsuario: string) : Observable<any> {
		return this.httpClient.get(`${API_URL}/user/exists/${nomeUsuario}`);
	}
}