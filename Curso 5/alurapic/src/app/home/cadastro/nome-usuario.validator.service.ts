import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, switchMap, first, map } from "rxjs/operators";
import { cadastroService } from './cadastro.service';
import { Observable } from 'rxjs';

/*
 * Validador assíncrono, para verificar disponibilidade do nome do usuário.
 */
@Injectable({ providedIn: "root" })
export class NomeUsuarioValidatorService {

	constructor(private cadastroService: cadastroService) { }

	verificarDisponibilidadeDeNome() {
		return (control: AbstractControl) => {
			return control
				// valueChanges - emite um evento sempre que o valor mudar.
				.valueChanges
				.pipe(debounceTime(300))
				// switchMap - para de ouvir a emissão anterior e passa a escutar o resultado de isNomeUsuarioDisponivel
				.pipe(
					switchMap(
						nomeUsuario => this.cadastroService.isNomeUsuarioDisponivel(nomeUsuario)
					)
				)
				// mapeia o resultado do switch, verifica se ele existe e retorna o nome do validador 'nomeIndisponivel' ou null,
				.pipe(map(isIndisponivel => isIndisponivel ? { nomeIndisponivel: true } : null))
				.pipe(first());
		}
	}
}