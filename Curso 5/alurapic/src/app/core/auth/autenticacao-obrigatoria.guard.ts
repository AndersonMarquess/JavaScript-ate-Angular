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
			this.redirecionarParaLogin(state);
			return false;
		}
	}

	/**
	 * Vai para tela de login, após login, redireciona o usuário para rota que ele estava tentando acessar anteriormente.
	 * @param state 
	 */
	private redirecionarParaLogin(state: RouterStateSnapshot): void {
		this.router.navigate(
			[''],
			{
				queryParams: { redirecionarPara: state.url }
			}
		);
	}
}