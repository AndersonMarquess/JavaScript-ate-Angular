import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {

	constructor(private usuarioService: UserService, private router: Router) { }

	/*
	 * true - tem acesso a rota.
	 */
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

		if (this.usuarioService.estaLogado()) {
			this.redirecionarParaListagemDeFotos();
			return false;
		}

		return true;
	}

	private redirecionarParaListagemDeFotos() {
		this.router.navigate(['user', this.usuarioService.getNomeUsuario()]);
	}
}