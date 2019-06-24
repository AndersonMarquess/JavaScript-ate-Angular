import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';

const rotasDaAplicacao: Routes = [
	/* 
	 * Rota de acesso e component que será carregado.
	 * :nomeVariavel igual hibernate, usar dois pontos antes.
	 * Para acessar o valor: this.activatedRoute.snapshot.params.nomeVariavel
	 */
	{ path: 'user/:userName', component: PhotoListComponent },
	{ path: 'p/add', component: PhotoFormComponent },
	/* Caminho coringa para lidar com rotas inexistentes */
	{ path: '**', component: NotFoundComponent }
]

@NgModule({
	imports: [RouterModule.forRoot(rotasDaAplicacao)],
	// exportação dos componentes que serão usados por outros componentes, ao importar o AppRoutingModule.
	exports: [RouterModule]
})
export class AppRoutingModule { }