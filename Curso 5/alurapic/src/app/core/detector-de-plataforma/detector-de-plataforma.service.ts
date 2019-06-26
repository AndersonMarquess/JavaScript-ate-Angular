import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from "@angular/common";

@Injectable({ providedIn: 'root' })
export class DetectorDePlataformaService {
	/*
	 * @Inject(PLATFORM_ID) -> informa que o angular irá injetar o valor de PLATFORM_ID na variável.
	 */
	constructor(@Inject(PLATFORM_ID) private platformID: string) {
		console.log(`Plataforma que esta rodando: ${this.platformID}`);
	}

	estaRodandoNoBrowser(): boolean {
		return isPlatformBrowser(this.platformID);
	}

	estaRodandoNoServidor(): boolean {
		return isPlatformServer(this.platformID);
	}
}