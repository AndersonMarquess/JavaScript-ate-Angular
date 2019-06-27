import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:3000';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private httpCliente: HttpClient, private userService: UserService) { }

	autenticar(nomeUsuario: string, senha: string): Observable<any> {
		const endereco = API_URL + '/user/login';
		const objPost = {
			userName: nomeUsuario,
			password: senha
		};

		return this.httpCliente
			//{ observe: 'response' } -> permite acessar os dados do header
			.post(endereco, objPost, { observe: 'response' })
			.pipe(tap(resposta => {
				const authToken = resposta.headers.get("x-access-token");
				this.userService.setToken(authToken);
			}));
	}
}
