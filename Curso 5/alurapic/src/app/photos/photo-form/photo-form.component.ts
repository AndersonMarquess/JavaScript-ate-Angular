import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/compartilhados/componentes/alert/alert.service';
import { UserService } from 'src/app/core/user/user.service';
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
	previewFotoBase64: string;

	constructor(private formBuilder: FormBuilder, private photoService: PhotoService, private router: Router,
		private alertService: AlertService, private userService: UserService) { }

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
				sucesso => {
					this.alertService.success("Envio concluído com sucesso", true);
					this.router.navigate(['/user', this.userService.getNomeUsuario()]);
				}
			);

	}

	deArquivoParaBase64(arquivo: File) {
		this.fotoFile = arquivo;

		const reader = new FileReader();
		reader.readAsDataURL(arquivo);

		reader.onload = (evento: any) => {
			this.previewFotoBase64 = evento.target.result;
		};
	}
}
