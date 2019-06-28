import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuard } from '../core/auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const rotasFilhas: Routes = [
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
	}
]
@NgModule({
	// Rotas filha
	imports: [RouterModule.forChild(rotasFilhas)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }