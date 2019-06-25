import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
	// ao definir o seletor dentro de []colchetes, podemos usa-lo da seguinte forma: <input apEscurerAoSobrepor/>
	selector: '[apEscurecerAoSobrepor]'
})
export class EscurecerAoSobreporDirective {

	constructor(private elemento: ElementRef, private render: Renderer) { }

	// método invocado quando o mouse passar sobre o elemento
	@HostListener('mouseover')
	escurecerAtivado() {
		let elemento = this.elemento.nativeElement;
		
		this.render.setElementStyle(elemento, "transition", ".4s");
		this.render.setElementStyle(elemento, "filter", "brightness(70%)");
	}
	
	// método invocado quando o mouse sair do elemento
	@HostListener("mouseleave")
	escurecerDesativado() {
		let elemento = this.elemento.nativeElement;
		let nomeDoEstilo = 'filter';
		let valorDoEstilo = 'brightness(100%)';
		this.render.setElementStyle(elemento, nomeDoEstilo, valorDoEstilo);
	}
}