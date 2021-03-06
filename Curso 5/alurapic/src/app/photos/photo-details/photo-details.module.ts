import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MsgValidacaoModule } from 'src/app/compartilhados/componentes/msg-validacao/msg-validacao.module';
import { PhotoModule } from '../photo/photo.module';
import { ApenasCriadorPhotoDirective } from './apenas-criador-photo/apenas-criador-photo.directive';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoDetailsComponent } from './photo-details.component';
import { ApenasLogadoModule } from 'src/app/compartilhados/diretivas/apenas-logado/apenas-logado.module';

@NgModule({
	declarations: [
		PhotoDetailsComponent,
		PhotoCommentsComponent,
		ApenasCriadorPhotoDirective
	],
	imports: [
		CommonModule,
		PhotoModule,
		RouterModule,
		ReactiveFormsModule,
		MsgValidacaoModule,
		ApenasLogadoModule
	],
	exports: [
		PhotoDetailsComponent,
		PhotoCommentsComponent
	]
})
export class PhotoDetailsModule { }