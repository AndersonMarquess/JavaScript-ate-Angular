import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable({ providedIn: 'root' })
export class LoadingInterceptor implements HttpInterceptor {

	constructor(private loadindService: LoadingService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		return next.handle(req)
			.pipe(tap(event => {
				this.controlarBarraLoading(event);
			}));
	}


	private controlarBarraLoading(event: HttpEvent<any>) {
		if (event instanceof HttpResponse) {
			this.loadindService.stop();
		}
		else {
			this.loadindService.start();
		}
	}
}