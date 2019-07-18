import { Directive, ElementRef, OnInit, Renderer } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Directive({
	selector: '[apenasLogado]'
})
export class ApenasLogadoDirective implements OnInit {

	constructor(private elemento: ElementRef<any>, private renderer: Renderer, private userService: UserService) { }

	ngOnInit(): void {
		if (!this.userService.estaLogado()) {
			this.renderer.setElementStyle(this.elemento.nativeElement, "display", "none");
		}
	}
}