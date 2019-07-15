import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoDetailsComponent } from './photo-details.component';
import { MsgValidacaoModule } from 'src/app/compartilhados/componentes/msg-validacao/msg-validacao.module';

@NgModule({
	declarations: [
		PhotoDetailsComponent,
		PhotoCommentsComponent
	],
	imports: [
		CommonModule,
		PhotoModule,
		RouterModule,
		ReactiveFormsModule,
		MsgValidacaoModule
	],
	exports: [
		PhotoDetailsComponent,
		PhotoCommentsComponent
	]
})
export class PhotoDetailsModule { }