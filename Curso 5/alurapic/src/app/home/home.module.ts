import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from './login/login.component';
import { MsgValidacaoModule } from '../compartilhados/componentes/msg-validacao/msg-validacao.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [
		CommonModule,
		// possibilita validação.
		ReactiveFormsModule,
		MsgValidacaoModule
    ]
})
export class HomeModule { }
