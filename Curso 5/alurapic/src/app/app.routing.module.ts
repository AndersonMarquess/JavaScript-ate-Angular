import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { LoginComponent } from './home/login/login.component';
import { AuthGuard } from './core/auth/auth.guard';
import { CadastroComponent } from './home/cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';

const rotasDaAplicacao: Routes = [
	{
		path: '',
		component: HomeComponent,
		// Ativa a guarda de rota para esta rota.
		canActivate: [AuthGuard],
		// Rotas filhas, rederizadas no outlet.
		children: [
			{
				path: '',
				component: LoginComponent
			},
			{
				path: 'cadastrar',
				component: CadastroComponent
			}
		]
	},
	/* 
	 * Rota de acesso e component que será carregado.
	 * :nomeVariavel igual hibernate, usar dois pontos antes.
	 * Para acessar o valor: this.activatedRoute.snapshot.params.nomeVariavel
	 */
	{
		path: 'user/:userName',
		component: PhotoListComponent,
		// faz com que o componente seja carregado já com o conteúdo retornado por 'PhotoListResolver'
		resolve: {
			fotosOrigemResolver: PhotoListResolver
		}
	},
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