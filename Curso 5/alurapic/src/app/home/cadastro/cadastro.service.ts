import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';

const API_URL = "http://localhost:3000";

@Injectable({ providedIn: "root" })
export class CadastroService {

	constructor(private httpClient: HttpClient) { }

	isNomeUsuarioDisponivel(nomeUsuario: string): Observable<any> {
		return this.httpClient.get(`${API_URL}/user/exists/${nomeUsuario}`);
	}

	cadastrar(novoUsuario: NovoUsuario): Observable<any> {
		return this.httpClient.post(`${API_URL}/user/signup`, novoUsuario);
	}
}