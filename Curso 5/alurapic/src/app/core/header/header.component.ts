import { Component } from '@angular/core';
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
	usuario: Usuario;

	constructor(usuarioService: UserService) {
		this.user$ = usuarioService.getUser();

		this.user$.subscribe(user => { 
			this.usuario = user;
		});
	}
}