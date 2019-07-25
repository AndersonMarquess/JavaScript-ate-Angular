import { FormGroup, ValidatorFn } from '@angular/forms';

/**
 * Válido se o nome do usuário e a senha são diferentes.
 * Null para válido, True para inválido.
 */
export const nomeUsuarioSenhaValidator: ValidatorFn = (formGroup: FormGroup) => {
	const userName: string = formGroup.get('userName').value;
	const password: string = formGroup.get('password').value;
	const possuiDadosNosCampos = userName.trim().concat(password.trim());

	if (possuiDadosNosCampos) {
		if (userName != password) {
			return null;
		}
		return { nomeUsuarioSenhaValidator: true };
	}

	return null;
}