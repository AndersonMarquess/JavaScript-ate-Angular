import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardModule } from 'src/app/compartilhados/componentes/card/card.module';
import { EscurecerAoSobreporModule } from 'src/app/compartilhados/diretivas/escurecer-ao-sobrepor/escurecer-ao-sobrepor.module';
import { PhotoModule } from '../photo/photo.module';
import { BuscaComponent } from './busca/busca.component';
import { FilterByDescriptionPipe } from './filterByDescription.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';

@NgModule({
	declarations: [
		PhotoListComponent,
		PhotosComponent,
		LoadButtonComponent,
		FilterByDescriptionPipe,
		BuscaComponent
	],
	imports: [
		CommonModule,
		PhotoModule,
		CardModule,
		EscurecerAoSobreporModule,
		RouterModule
	]
})
export class PhotoListModule { }