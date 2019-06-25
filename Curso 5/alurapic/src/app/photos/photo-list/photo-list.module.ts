import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filterByDescription.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/compartilhados/componentes/card/card.module';
import { BuscaComponent } from './busca/busca.component';
import { EscurecerAoSobreporModule } from 'src/app/compartilhados/diretivas/escurecer-ao-sobrepor/escurecer-ao-sobrepor.module';

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
		EscurecerAoSobreporModule
	]
})
export class PhotoListModule { }