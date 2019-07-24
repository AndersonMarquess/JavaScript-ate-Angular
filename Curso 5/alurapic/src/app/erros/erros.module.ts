import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobalErroComponent } from './global-erro/global-erro.componenet';
import { GlobalErrorHandler } from './global-error-handler/global-error-handler';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
	declarations: [
		NotFoundComponent,
		GlobalErroComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	providers: [
		{
			// Quando um erro ocorrer, a classe GlobalErrorHandler é chamada para tratar o erro.
			provide: ErrorHandler,
			useClass: GlobalErrorHandler
		}
	]
})
export class ErrosModule { }
