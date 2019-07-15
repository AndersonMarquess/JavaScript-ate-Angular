import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoComment } from '../../photo/photo-comment';
import { PhotoService } from '../../photo/photo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
	selector: 'ap-photo-comments',
	templateUrl: './photo-comments.component.html'
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

	comentar() {
		const comentario = this.formNovoComentario.get("comment").value;
		this.photoService
			.addComentario(comentario, this.photoId)
			.subscribe(sucesso => this.formNovoComentario.reset());
	}
}