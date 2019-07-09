import { Directive, ElementRef, OnInit } from '@angular/core';
import { DetectorDePlataformaService } from 'src/app/core/detector-de-plataforma/detector-de-plataforma.service';

@Directive({
	selector: '[clickImediato]'
})
export class ClickImediatoDirective implements OnInit {

	constructor(private elementoHTML: ElementRef<any>, private detectorDePlataforma: DetectorDePlataformaService) {}

	ngOnInit(): void {
		if (this.detectorDePlataforma.estaRodandoNoBrowser()) {
			this.elementoHTML.nativeElement.click();
		}
	}

}