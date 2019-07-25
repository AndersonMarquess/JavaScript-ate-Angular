import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { DetectorDePlataformaService } from 'src/app/core/detector-de-plataforma/detector-de-plataforma.service';

@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	redirecionarPara: string;
	formularioDeLogin: FormGroup;
	@ViewChild('varDeTemplateDoInputNome', null) inputNomeUsuario: ElementRef<HTMLInputElement>;

	constructor(
		private router: Router, private activatedRoute: ActivatedRoute,
		private formBuilder: FormBuilder, private authService: AuthService,
		private detectorPlataforma: DetectorDePlataformaService, private titleService: Title) { }

	ngOnInit() {
		this.titleService.setTitle("Login");
		this.extrairRotaParaRedirecionar();

		//validação de formulário
		this.formularioDeLogin = this.formBuilder.group({
			// A chave corresponde ao input presente no formulário do template.
			// Colocamos no array as condições de validação, o primeiro elemento é o valor presente no input.
			nomeUsuario: ['', Validators.required],
			senha: ['', Validators.required]
		});

		if (this.detectorPlataforma.estaRodandoNoBrowser()) {
			this.inputNomeUsuario.nativeElement.focus();
		}
	}

	private extrairRotaParaRedirecionar() {
		this.redirecionarPara = this.activatedRoute.snapshot.queryParams.redirecionarPara;
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
			sucesso => {
				if (this.redirecionarPara) {
					this.router.navigateByUrl(this.redirecionarPara);
				} else {
					this.router.navigate(['user', nome]);
				}
			},
			erro => {
				if (this.detectorPlataforma.estaRodandoNoBrowser()) {
					this.inputNomeUsuario.nativeElement.focus();
				}

				this.formularioDeLogin.reset();
			}
		);
	}
}
