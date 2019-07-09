import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MsgValidacaoModule } from 'src/app/compartilhados/componentes/msg-validacao/msg-validacao.module';
import { PhotoModule } from '../photo/photo.module';
import { PhotoFormComponent } from './photo-form.component';
import { ClickImediatoModule } from 'src/app/compartilhados/diretivas/click-imediato/click-imediato.modules';

@NgModule({
	declarations: [PhotoFormComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MsgValidacaoModule,
		FormsModule,
		RouterModule,
		PhotoModule,
		ClickImediatoModule
	]
})
export class PhotoFormModule { }