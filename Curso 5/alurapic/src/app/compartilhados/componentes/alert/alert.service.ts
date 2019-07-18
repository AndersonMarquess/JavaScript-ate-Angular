import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Alert, TipoDeAlerta } from './alert';

@Injectable({ providedIn: 'root' })
export class AlertService {

	alertSubject = new Subject<Alert>();

	success(msg: string): void {
		this._alert(TipoDeAlerta.SUCCESS, msg);
	}

	warning(msg: string): void {
		this._alert(TipoDeAlerta.WARNING, msg);
	}

	danger(msg: string): void {
		this._alert(TipoDeAlerta.DANGER, msg);
	}

	info(msg: string): void {
		this._alert(TipoDeAlerta.INFO, msg);
	}

	private _alert(tipoDeAlerta: TipoDeAlerta, mensagem: string): void {
		this.alertSubject.next(new Alert(tipoDeAlerta, mensagem));
	}

	getAlert(): Observable<Alert> {
		return this.alertSubject.asObservable();
	}

	removerAlert(): void {
		this.alertSubject.next(null);
	}
}