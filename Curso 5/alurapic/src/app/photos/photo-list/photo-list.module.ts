import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filterByDescription.pipe';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
	declarations: [
		PhotoListComponent,
		PhotosComponent,
		LoadButtonComponent,
		FilterByDescriptionPipe
	],
	imports: [
		CommonModule, 
		PhotoModule
	]
})
export class PhotoListModule { }