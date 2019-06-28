import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { MsgValidacaoModule } from '../compartilhados/componentes/msg-validacao/msg-validacao.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { CadastroService } from './cadastro/cadastro.service';

@NgModule({
	declarations: [
		LoginComponent,
		CadastroComponent,
		HomeComponent
	],
	imports: [
		CommonModule,
		// possibilita validação.
		ReactiveFormsModule,
		MsgValidacaoModule,
		RouterModule,
		FormsModule,
		HomeRoutingModule
	],
	providers: [
		// Service disponível apenas para componentes da Home.
		CadastroService
	]
})
export class HomeModule { }
