import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PhotoService } from '../photo/photo.service';

@Component({
	selector: 'ap-photo-form',
	templateUrl: './photo-form.component.html',
	styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

	formNovaFoto: FormGroup;
	// Permite acesso ao binário do arquivo
	fotoFile: File;

	constructor(private formBuilder: FormBuilder, private photoService: PhotoService, private router: Router) { }

	ngOnInit() {
		this.formNovaFoto = this.formBuilder.group({
			file: ['', Validators.required],
			description: ['', Validators.maxLength(300)],
			allowComments: [true]
		});
	}

	upload(): void {
		const description = this.formNovaFoto.get("description").value;
		const allowComments = this.formNovaFoto.get("allowComments").value;

		this.photoService
			.publicarFoto(description, allowComments, this.fotoFile)
			.subscribe(
				sucesso => this.router.navigate([''])
			);

	}
}
