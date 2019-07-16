import { Directive, ElementRef, Input, OnInit, Renderer } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { Usuario } from 'src/app/core/user/usuario';
import { Photo } from '../../photo/Photo';

@Directive({
	selector: '[apenasCriadorPhoto]'
})
export class ApenasCriadorPhotoDirective implements OnInit {
	@Input() photoCriada: Photo;

	constructor(private elemento: ElementRef<any>, private renderer: Renderer, private userService: UserService) { }

	ngOnInit(): void {
		this.userService.getUser()
			.subscribe(usuario => {
				this.ocultarParaUsuarioSemPermissao(usuario);
			});
	}

	private ocultarParaUsuarioSemPermissao(usuario: Usuario) {
		if (usuario && usuario.id != this.photoCriada.userId) {
			this.renderer.setElementStyle(this.elemento.nativeElement, 'display', 'none');
		}
	}
}