import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClickImediatoDirective } from './click-imediato.rirective';

@NgModule({
	declarations: [ClickImediatoDirective],
	imports: [CommonModule],
	exports: [ClickImediatoDirective]
})
export class ClickImediatoModule { }