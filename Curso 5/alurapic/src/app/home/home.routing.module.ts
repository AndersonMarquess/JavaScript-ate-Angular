import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../core/auth/login.guard';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';


const rotasFilhas: Routes = [
	{
		path: '',
		component: HomeComponent,
		// Ativa a guarda de rota para esta rota.
		canActivate: [LoginGuard],
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