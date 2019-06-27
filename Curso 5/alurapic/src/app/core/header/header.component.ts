import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserService } from '../user/user.service';
import { Usuario } from '../user/usuario';

@Component({
	selector: 'ap-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent {

	// é uma boa prática colocar um cifrão após o nome das variáveis do tipo observable.
	user$: Observable<Usuario>;

	constructor(private usuarioService: UserService, private router: Router) {
		this.user$ = usuarioService.getUser();
	}

	logout(): void {
		this.usuarioService.logout();
		this.redirecionarParaLogin();
	}
	
	private redirecionarParaLogin(): void {
		this.router.navigateByUrl('/');
	}
}