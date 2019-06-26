import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { DetectorDePlataformaService } from 'src/app/core/detector-de-plataforma/detector-de-plataforma.service';

@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	formularioDeLogin: FormGroup;
	@ViewChild('varDeTemplateDoInputNome', null) inputNomeUsuario: ElementRef<HTMLInputElement>;

	constructor(private formBuilder: FormBuilder, private authService: AuthService,
		private router: Router, private detectorPlataforma: DetectorDePlataformaService) { }

	ngOnInit() {

		//validação de formulário
		this.formularioDeLogin = this.formBuilder.group({
			// A chave corresponde ao input presente no formulário do template.
			// Colocamos no array as condições de validação, o primeiro elemento é o valor presente no input.
			nomeUsuario: ['', Validators.required],
			senha: ['', Validators.required]
		});
	}

	// chamado no evento de submit do form.
	login() {
		const nome = this.formularioDeLogin.get('nomeUsuario').value;
		const senha = this.formularioDeLogin.get('senha').value;

		this.authService.autenticar(nome, senha).subscribe(
			/*
			 * No sucesso, o usuário é redirecionado.
			 * ['user', nome] é o mesmo que -> user/nome.
			 * também é possível usar, router.navigateByUrl('user/'+nome);
			 */
			sucesso => this.router.navigate(['user', nome]),
			erro => {
				if (this.detectorPlataforma.estaRodandoNoBrowser()) {
					this.inputNomeUsuario.nativeElement.focus();
				}

				this.formularioDeLogin.reset();
			}
		);
	}
}
