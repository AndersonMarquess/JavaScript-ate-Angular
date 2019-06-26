import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [
		CommonModule,
		// possibilita validação.
		ReactiveFormsModule
    ]
})
export class HomeModule { }
