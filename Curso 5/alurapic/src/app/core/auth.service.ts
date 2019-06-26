import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private httpCliente: HttpClient) { }

	autenticar(nomeUsuario: string, senha: string): Observable<any> {
		const endereco = API_URL + '/user/login';
		const objPost = {
			userName: nomeUsuario,
			password: senha
		};

		return this.httpCliente.post(endereco, objPost);
	}
}
