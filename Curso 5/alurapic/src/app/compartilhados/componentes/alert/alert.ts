export class Alert {
	// readonly - uma vez atribuído não pode ser alterado.
	constructor(public readonly tipoDeAlerta: TipoDeAlerta, public readonly mensagem: string) { }
}

export enum TipoDeAlerta {
	SUCCESS,
	WARNING,
	DANGER,
	INFO
}