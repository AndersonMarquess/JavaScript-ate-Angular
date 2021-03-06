import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoObrigatoriaGuard } from './core/auth/autenticacao-obrigatoria.guard';
import { GlobalErroComponent } from './erros/global-erro/global-erro.componenet';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const rotasDaAplicacao: Routes = [
	{
		// chega no endpoint vazio e redireciona para home
		path: '',
		// pathMatch: 'full' - importante, verificar se todo o caminho combinou antes de redirecionar.
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{
		path: 'home',
		// Para usar o lazy loading, não podemos importar o module direto no app.module.
		// Especificamos o caminho # Nome do module que será importada.
		loadChildren: './home/home.module#HomeModule',
		data: {
			titulo: 'Alurapic'
		}
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
		},
		// Conteúdo extra para ser acessado no componente de foto.
		data: {
			titulo: 'Linha do tempo'
		}
	},
	{
		path: 'p/add',
		component: PhotoFormComponent,
		canActivate: [AutenticacaoObrigatoriaGuard],
		data: {
			titulo: 'Enviar foto'
		}
	},
	{
		path: 'p/:photoId',
		component: PhotoDetailsComponent,
		data: {
			titulo: 'Detalhe da foto'
		}
	},
	{
		path: 'erro',
		component: GlobalErroComponent,
		data: {
			titulo: 'Erro'
		}
	},
	{ path: 'not-found', redirectTo: '**' },
	/* Caminho coringa para lidar com rotas inexistentes */
	{ path: '**', component: NotFoundComponent }
]

@NgModule({
	imports: [
		// RouterModule.forRoot(rotasDaAplicacao, { useHash: true }) - para habilitar o # e aumentar a compatibilidade.
		RouterModule.forRoot(rotasDaAplicacao)
	],
	// exportação dos componentes que serão usados por outros componentes, ao importar o AppRoutingModule.
	exports: [RouterModule]
})
export class AppRoutingModule { }