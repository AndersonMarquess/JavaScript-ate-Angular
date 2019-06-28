import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { RequestInterceptor } from './auth/request.interceptor';

@NgModule({
	declarations: [HeaderComponent],
	imports: [
		CommonModule,
		// Necessário para usar o routerLink.
		RouterModule
	],
	providers:[
		{
			// Habilita o interceptor personalizado.
			provide: HTTP_INTERCEPTORS,
			useClass: RequestInterceptor,
			// Caso exista outro interceptador, ele chama o próximo.
			multi: true
		}
	],
	exports: [HeaderComponent]
})
export class CoreModule { }