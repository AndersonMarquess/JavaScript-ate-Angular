import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { lowerCaseValidator } from 'src/app/compartilhados/validadores/lower-case.validator';
import { CadastroService } from './cadastro.service';
import { NomeUsuarioValidatorService } from './nome-usuario.validator.service';
import { NovoUsuario } from './novo-usuario';
import { DetectorDePlataformaService } from 'src/app/core/detector-de-plataforma/detector-de-plataforma.service';

@Component({
	selector: 'ap-cadastro',
	templateUrl: './cadastro-component.html'
})
export class CadastroComponent implements OnInit {
	
	cadastroForm: FormGroup;
	// inputEmail - é a variável de template.
	@ViewChild("inputEmail", null) inputEmail: ElementRef<HTMLInputElement>;

	constructor(private formBuilder: FormBuilder,
		private nomeUsuarioValidator: NomeUsuarioValidatorService,
		private cadastroService: CadastroService,
		private router: Router,
		private detectorPlataforma: DetectorDePlataformaService) { }

	ngOnInit(): void {
		this.cadastroForm = this.formBuilder.group({
			// valor inicial e array de validadores.
			email: [
				'',
				[
					Validators.required,
					Validators.email
				]
			],
			fullName: [
				'',
				[
					Validators.required,
					Validators.minLength(5),
					Validators.maxLength(50)
				]
			],
			userName: [
				// valor do campo
				'',
				// validadores síncronos
				[
					Validators.required,
					Validators.minLength(5),
					Validators.maxLength(20),
					// validador personalizado
					lowerCaseValidator,
				],
				// validador assíncrono
				this.nomeUsuarioValidator.verificarDisponibilidadeDeNome()
			],
			password: [
				'',
				[
					Validators.required,
					Validators.minLength(8),
					Validators.maxLength(14)
				]
			],
		});

		if (this.detectorPlataforma.estaRodandoNoBrowser()) {
			this.inputEmail.nativeElement.focus();
		}
	}

	cadastrar() {
		const novoUsuario = this.cadastroForm.getRawValue() as NovoUsuario;
		
		this.cadastroService.cadastrar(novoUsuario)
			.subscribe(sucesso => this.router.navigate(['/']));
	}
}