import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	formularioDeLogin: FormGroup;

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit() {
		
		//validação de formulário
		this.formularioDeLogin = this.formBuilder.group({
			// A chave corresponde ao input presente no formulário do template.
			// Colocamos no array as condições de validação, o primeiro elemento é o valor presente no input.
			nomeUsuario: ['', Validators.required],
			senha: ['', Validators.required]
		});
	}

}
