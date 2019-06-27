import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

	constructor(private usuarioService: UserService, private router: Router) { }

	/*
	 * true - tem acesso a rota.
	 */
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

		if(this.usuarioService.estaLogado()) {
			this.router.navigate(['user', this.usuarioService.getNomeUsuario()])
			return false;
		}

		return true;
	}
}