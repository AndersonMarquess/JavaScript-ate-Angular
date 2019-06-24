import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrosModule } from './erros/erros.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		PhotosModule,
		AppRoutingModule,
		ErrosModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
