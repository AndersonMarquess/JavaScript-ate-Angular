import { AbstractControl } from '@angular/forms';

/*
 * validação personalizada.
 */
export function lowerCaseValidator(control: AbstractControl) {
	const comecaComLetraMinuscula: boolean = (/^[a-z0-9_\-]+$/).test(control.value);

	if(control.value.trim() && !comecaComLetraMinuscula) {
		// lowerCase é o nome da propriedade acessada no template por meio do formGroup('xpto').errors.lowercase
		return { lowercase: true }
	}

	return null;
}