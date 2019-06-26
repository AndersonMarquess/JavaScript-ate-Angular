import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	formularioDeLogin: FormGroup;

	constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

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
				suce => console.log('deu certo', suce), 
				erro => console.log(erro.message)
			);
	}
}
