import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/Photo';
import { PhotoService } from '../photo/photo.service';

@Component({
	templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

	photo$: Observable<Photo>;
	idPhotoDetails: number;

	constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }

	ngOnInit(): void {
		// photoId - definido no app.routing
		this.idPhotoDetails = this.activatedRoute.snapshot.params.photoId;
		this.photo$ = this.photoService.buscarPorId(this.idPhotoDetails);
	}

}