import { Injectable } from '@angular/core';

const KEY = "authToken";

@Injectable({ providedIn: "root" })
export class TokenService {
	
	possuiToken(): boolean {
		return this.getToken() != null;
	}

	setToken(valorToken): void {
		localStorage.setItem(KEY, valorToken);
	}

	getToken(): string {
		return localStorage.getItem(KEY);
	}

	removerToken(): void {
		localStorage.removeItem(KEY);
	}
}