import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Usuario } from './usuario';

// importa tudo e chama de jwt_decode
import * as jwt_decode from "jwt-decode";

@Injectable({ providedIn: "root" })
export class UserService {

	// BehaviorSubject exige que seja informado um valor inicial.
	// Ele guarda o ultimo valor informado, desta forma ele (o valor) continua disponível mesmo após atualizar a página.
	private usuarioSubject = new BehaviorSubject<Usuario>(null);
	nomeUsuario: string;

	constructor(private tokenService: TokenService) {
		if (this.tokenService.possuiToken()) {
			this.decodificarENotificar();
		}
	}

	setToken(valorToken): void {
		this.tokenService.setToken(valorToken);
		this.decodificarENotificar();
	}

	getUser(): Observable<Usuario> {
		return this.usuarioSubject.asObservable();
	}

	private decodificarENotificar(): void {
		const token = this.tokenService.getToken();
		const usuario = jwt_decode(token) as Usuario;

		this.nomeUsuario = usuario.name;
		this.usuarioSubject.next(usuario);
	}

	logout() {
		this.tokenService.removerToken();
		this.usuarioSubject.next(null);
	}

	estaLogado() {
		return this.tokenService.possuiToken();
	}

	getNomeUsuario() {
		return this.nomeUsuario;
	}
}