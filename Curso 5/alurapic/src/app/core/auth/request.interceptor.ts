import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../token/token.service';

/*
 * Intercepta cada request e adicionar o token. (funciona igual um filter).
 */
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
	
	constructor(private tokenSerice: TokenService) {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		if(this.tokenSerice.possuiToken()) {
			const token = this.tokenSerice.getToken();
			req = req.clone({
				setHeaders: {
					'x-access-token': token
				}
			});
		}

		// da continuidade ao request.
		return next.handle(req);
	}
}