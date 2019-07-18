import { Component, Input, OnInit } from '@angular/core';
import { Alert, TipoDeAlerta } from './alert';
import { AlertService } from './alert.service';

@Component({
	selector: 'ap-alert',
	templateUrl: './alert.component.html'
})
export class AlertComponent implements OnInit {

	@Input() tempoDeExibicao = 3000;
	alertas: Alert[] = [];

	constructor(private alertService: AlertService) { }

	ngOnInit(): void {
		this.alertService.getAlert()
			.subscribe(alerta => {
				if (alerta) {
					this.adicionarAlerta(alerta);
				} else {
					this.limparAlertas();
				}
			});
	}

	public getAlertClassBootstrap(alerta: Alert): string {
		switch (alerta.tipoDeAlerta) {
			case TipoDeAlerta.SUCCESS:
				return "alert alert-success";
			case TipoDeAlerta.WARNING:
				return "alert alert-warning";
			case TipoDeAlerta.DANGER:
				return "alert alert-danger";
			case TipoDeAlerta.INFO:
				return "alert alert-info";
			default:
				return "";
		}
	}

	adicionarAlerta(alerta: Alert): void {
		this.alertas.push(alerta);
		this.removerAlertaAposTempoDeExibicao(alerta);
	}

	removerAlertaAposTempoDeExibicao(alerta: Alert) {
		setTimeout(() => {
			this.removerAlerta(alerta);
		}, this.tempoDeExibicao);
	}

	limparAlertas(): void {
		this.alertas = [];
	}

	removerAlerta(alerta: Alert): void {
		this.alertas = this.alertas.filter(alert => alert != alerta);
	}
}