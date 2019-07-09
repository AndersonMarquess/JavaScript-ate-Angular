import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({ providedIn: 'root' })
export class AutenticacaoObrigatoriaGuard implements CanActivate {

	constructor(private usuarioService: UserService, private router: Router) { }

	/*
	 * true - tem acesso a rota.
	 */
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

		if (this.usuarioService.estaLogado()) {
			return true;
		} else {
			this.redirecionarParaLogin();
			return false;
		}
	}

	private redirecionarParaLogin(): void {
		this.router.navigate(['']);
	}
}