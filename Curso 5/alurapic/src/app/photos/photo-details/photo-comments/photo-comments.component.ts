import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { PhotoComment } from '../../photo/photo-comment';
import { PhotoService } from '../../photo/photo.service';

@Component({
	selector: 'ap-photo-comments',
	templateUrl: './photo-comments.component.html',
	styleUrls: ['./photo-comments.component.css']
})
export class PhotoCommentsComponent implements OnInit {

	@Input() photoId: number;
	comments$: Observable<PhotoComment[]>
	formNovoComentario: FormGroup;

	constructor(private photoService: PhotoService, private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.comments$ = this.photoService.bucarComentarios(this.photoId);

		this.formNovoComentario = this.formBuilder.group({
			comment: ['', Validators.maxLength(300)]
		});
	}

	public comentar(): void {
		const comentario = this.formNovoComentario.get("comment").value;

		// o retorno é o observable de buscarComentario e não o observable de addComentario,
		// esse troca foi alcançada com o switchMap.
		this.comments$ = this.photoService
			.addComentario(comentario, this.photoId)
			//Sai do fluxo de adicionar comentarios e chama o de buscarComentarios.
			.pipe(
				switchMap(outroObservable => this.photoService.bucarComentarios(this.photoId))
			)
			// o tap é executado antes de retornar o observable de buscarComentarios.
			.pipe(
				tap(antesDeRetornarObservable => this.formNovoComentario.reset())
			);
	}
}