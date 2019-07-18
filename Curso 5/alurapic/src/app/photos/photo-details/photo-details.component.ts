import { Component, ElementRef, OnInit, Renderer } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/compartilhados/componentes/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';
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
	timerCrescente: any = 0;

	constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService, private router: Router,
		private elementRef: ElementRef, private renderer: Renderer, private alertService: AlertService, private userService: UserService) { }

	ngOnInit(): void {
		// photoId - definido no app.routing
		this.idPhotoDetails = this.activatedRoute.snapshot.params.photoId;
		this.photo$ = this.photoService.buscarPorId(this.idPhotoDetails);
	}

	removerFoto(): void {
		this.debounceRemoverFoto();
	}

	private debounceRemoverFoto(): void {
		// toda vez que a função é chamada, o valor da variável timerCrescente é resetado para 0.
		clearTimeout(this.timerCrescente);

		// só executa a função dentro do timeout, quando o valor da variável timerCrescente for igual a 3000.
		this.timerCrescente = setTimeout(() => {
			this.photoService
				.removerFoto(this.idPhotoDetails)
				.subscribe(
					sucesso => {
						this.alertService.success("Foto removida com sucesso", true);
						this.router.navigate(['/user', this.userService.getNomeUsuario()]);
					},
					erro => {
						console.log(erro.message);
						this.alertService.danger("Erro ao tentar remover foto", true);
					}
				);
		}, 700);
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