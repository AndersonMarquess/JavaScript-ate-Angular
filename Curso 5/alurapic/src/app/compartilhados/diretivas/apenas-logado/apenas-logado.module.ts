import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApenasLogadoDirective } from './apenas-logado.directive';

@NgModule({
	declarations: [ApenasLogadoDirective],
	imports: [CommonModule],
	exports: [ApenasLogadoDirective]
})
export class ApenasLogadoModule { }