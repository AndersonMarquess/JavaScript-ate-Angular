import { NgModule } from '@angular/core';

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';

/* 
 * A ideia de usar um "module" para cada funcionalidade tem como objetivo, diminuir a quantidade de declarações
 * no "app.module.ts" (root), permitindo uma melhor organização do módulo raiz.
 * 
 * Todas as funcionalidade relacionada com este módulo, serão declaradas aqui mesmo. Por fim o módulo carregado
 * com todas as suas dependências é importado no app.module.ts.
 */
@NgModule({
	imports: [
		// CommonModule - possibilita o acesso as diretivas do angular (ex. *ngFor) para uso nos templates.
		PhotoModule,
		PhotoFormModule,
		PhotoListModule
	]
})
export class PhotosModule { }