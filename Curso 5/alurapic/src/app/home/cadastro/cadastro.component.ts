import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/compartilhados/validadores/lower-case.validator';
import { NomeUsuarioValidatorService } from './nome-usuario.validator.service';

@Component({
	selector: 'ap-cadastro',
	templateUrl: './cadastro-component.html'
})
export class CadastroComponent implements OnInit {
	cadastroForm: FormGroup;

	constructor(private formBuilder: FormBuilder, private nomeUsuarioValidator: NomeUsuarioValidatorService) { }

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
			nomeCompleto: [
				'',
				[
					Validators.required,
					Validators.minLength(5),
					Validators.maxLength(50)
				]
			],
			nomeUsuario: [
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
			senha: [
				'',
				[
					Validators.required,
					Validators.minLength(8),
					Validators.maxLength(14)
				]
			],
		});
	}
}