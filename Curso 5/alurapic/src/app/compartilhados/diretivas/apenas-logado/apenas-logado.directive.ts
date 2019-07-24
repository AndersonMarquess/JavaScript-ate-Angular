import { Directive, ElementRef, OnInit, Renderer } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
	selector: '[apenasLogado]'
})
export class ApenasLogadoDirective implements OnInit {

	displayAtual: string;

	constructor(private elemento: ElementRef<any>, private renderer: Renderer, private userService: UserService) { }

	ngOnInit(): void {
		this.salvarValorDisplayAtual();

		this.userService.getUser().subscribe(usuario => {
			if (usuario) {
				this.alterarValorDisplayDoElemento(this.displayAtual);
			} else {
				this.salvarValorDisplayAtual();
				this.alterarValorDisplayDoElemento("none");
			}
		});
	}

	private alterarValorDisplayDoElemento(valorDisplay: string): void {
		this.renderer.setElementStyle(this.elemento.nativeElement, "display", valorDisplay);
	}

	private salvarValorDisplayAtual(): void {
		this.displayAtual = getComputedStyle(this.elemento.nativeElement).display;
	}
}