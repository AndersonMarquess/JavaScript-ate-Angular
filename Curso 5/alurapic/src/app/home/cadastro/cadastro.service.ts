import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../../environments/environment";
import { NovoUsuario } from './novo-usuario';

const API_URL = environment.ApiUrl;;

// Injetado no HomeModule.
@Injectable()
export class CadastroService {

	constructor(private httpClient: HttpClient) { }

	isNomeUsuarioDisponivel(nomeUsuario: string): Observable<any> {
		return this.httpClient.get(`${API_URL}/user/exists/${nomeUsuario}`);
	}

	cadastrar(novoUsuario: NovoUsuario): Observable<any> {
		return this.httpClient.post(`${API_URL}/user/signup`, novoUsuario);
	}
}