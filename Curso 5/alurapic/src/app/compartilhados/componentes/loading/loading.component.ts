import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingType } from './loading-type';
import { LoadingService } from './loading.service';
import { map } from 'rxjs/operators';

@Component({
	selector: 'ap-loading',
	templateUrl: './loading.component.html',
	styleUrls: ['./loading.componenet.css']
})
export class LoadingComponent implements OnInit {

	loading$: Observable<string>;

	constructor(private loadingService: LoadingService) { }

	ngOnInit(): void {
		this.loading$ = this.loadingService.getLoading()
			// Pega o valor do enum como string
			.pipe(map(loadType => loadType.valueOf()));
	}
}