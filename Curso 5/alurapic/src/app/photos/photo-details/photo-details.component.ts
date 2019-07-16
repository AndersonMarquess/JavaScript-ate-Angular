import { Component, ElementRef, OnInit, Renderer } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/Photo';
import { PhotoService } from '../photo/photo.service';

@Component({
	templateUrl: './photo-details.component.html',
	styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

	photo$: Observable<Photo>;
	idPhotoDetails: number;
	isModalVisivel = false;
	elementoModal: HTMLElement;

	constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService, private router: Router,
		private elementRef: ElementRef, private renderer: Renderer) { }

	ngOnInit(): void {
		// photoId - definido no app.routing
		this.idPhotoDetails = this.activatedRoute.snapshot.params.photoId;
		this.photo$ = this.photoService.buscarPorId(this.idPhotoDetails);
	}

	removerFoto(): void {
		this.photoService
			.removerFoto(this.idPhotoDetails)
			.subscribe(sucesso => this.router.navigate(['/']));
	}

	mostrarEOcultarModal(): void {
		const valorDisplay = this.switchValorDisplay();
		this.renderer.setElementStyle(this.getElementoModal(), "display", valorDisplay);
	}

	private switchValorDisplay(): string {
		this.isModalVisivel = !this.isModalVisivel;
		return this.isModalVisivel ? "flex" : "none";
	}

	private getElementoModal(): HTMLElement {
		if (!this.elementoModal) {
			this.elementoModal = this.elementRef.nativeElement.querySelector("#modal-background");
		}
		return this.elementoModal;
	}
}