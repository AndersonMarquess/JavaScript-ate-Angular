import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MsgValidacaoModule } from 'src/app/compartilhados/componentes/msg-validacao/msg-validacao.module';
import { PhotoFormComponent } from './photo-form.component';

@NgModule({
	declarations: [PhotoFormComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MsgValidacaoModule,
		FormsModule,
		RouterModule
	]
})
export class PhotoFormModule { }