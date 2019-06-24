import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/Photo';

/**
 * Criação do pipe personalizado para filtrar as fotos de acordo com sua descrição.
 */
@Pipe({
	name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

	transform(fotos: Photo[], valorFiltro: string): Photo[] {
		valorFiltro = valorFiltro.trim().toLowerCase();
		
		if (!valorFiltro) return fotos;

		return fotos.filter(f => f.description.toLowerCase().includes(valorFiltro));
	}
}