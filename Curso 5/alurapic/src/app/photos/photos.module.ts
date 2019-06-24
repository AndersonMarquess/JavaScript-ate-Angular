import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescriptionPipe } from './photo-list/filterByDescription.pipe';

/* 
 * A ideia de usar um "module" para cada funcionalidade tem como objetivo, diminuir a quantidade de declarações
 * no "app.module.ts" (root), permitindo uma melhor organização do módulo raiz.
 * 
 * Todas as funcionalidade relacionada com este módulo, serão declaradas aqui mesmo. Por fim o módulo carregado
 * com todas as suas dependências é importado no app.module.ts.
 */
@NgModule({
	// declaração dos componentes que serão usados.
	declarations: [
		PhotoComponent, 
		PhotoListComponent, 
		PhotoFormComponent, 
		PhotosComponent,
		FilterByDescriptionPipe
	],
	imports: [
		HttpClientModule,
		// CommonModule - possibilita o acesso as diretivas do angular (ex. *ngFor) para uso nos templates.
		CommonModule
	]
})
export class PhotosModule { }