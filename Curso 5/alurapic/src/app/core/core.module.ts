import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule } from '../compartilhados/componentes/alert/alert.module';
import { LoadingModule } from '../compartilhados/componentes/loading/loading.module';
import { MenuModule } from '../compartilhados/componentes/menu/menu.module';
import { ApenasLogadoModule } from '../compartilhados/diretivas/apenas-logado/apenas-logado.module';
import { RequestInterceptor } from './auth/request.interceptor';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent
	],
	imports: [
		CommonModule,
		AlertModule,
		LoadingModule,
		MenuModule,
		ApenasLogadoModule,
		// Necessário para usar o routerLink.
		RouterModule
	],
	providers: [
		{
			// Habilita o interceptor personalizado.
			provide: HTTP_INTERCEPTORS,
			useClass: RequestInterceptor,
			// Caso exista outro interceptador, ele chama o próximo.
			multi: true
		}
	],
	exports: [
		HeaderComponent,
		FooterComponent
	]
})
export class CoreModule { }