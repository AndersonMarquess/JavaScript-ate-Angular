import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Alert, TipoDeAlerta } from './alert';

@Injectable({ providedIn: 'root' })
export class AlertService {

	alertSubject = new Subject<Alert>();
	manterAposMudancaDeRota = false;

	constructor(router: Router) {
		router.events
			.subscribe(event =>
				this.verificarAleracaoNaRota(event)
			);
	}

	verificarAleracaoNaRota(event: any): void {
		// se for o inicio de uma navegação
		if (event instanceof NavigationStart) {
			console.log("Iniciou navegação");

			if (this.manterAposMudancaDeRota) {
				this.manterAposMudancaDeRota = false;
			} else {
				this.removerAlert();
			}
		}
	}

	success(msg: string, manterAposMudancaDeRota: boolean = false): void {
		this._alert(TipoDeAlerta.SUCCESS, msg, manterAposMudancaDeRota);
	}

	warning(msg: string, manterAposMudancaDeRota: boolean = false): void {
		this._alert(TipoDeAlerta.WARNING, msg, manterAposMudancaDeRota);
	}

	danger(msg: string, manterAposMudancaDeRota: boolean = false): void {
		this._alert(TipoDeAlerta.DANGER, msg, manterAposMudancaDeRota);
	}

	info(msg: string, manterAposMudancaDeRota: boolean = false): void {
		this._alert(TipoDeAlerta.INFO, msg, manterAposMudancaDeRota);
	}

	private _alert(tipoDeAlerta: TipoDeAlerta, mensagem: string, manterAposMudancaDeRota: boolean): void {
		this.manterAposMudancaDeRota = manterAposMudancaDeRota;
		this.alertSubject.next(new Alert(tipoDeAlerta, mensagem));
	}

	getAlert(): Observable<Alert> {
		return this.alertSubject.asObservable();
	}

	removerAlert(): void {
		this.alertSubject.next(null);
	}
}