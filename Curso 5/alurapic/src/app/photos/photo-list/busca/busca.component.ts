import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
	selector: 'ap-busca',
	templateUrl: './busca.component.html'
})
export class BuscaComponent implements OnInit, OnDestroy {

	//evento personalizado (usado no photo-list)
	@Output() aoDigitar = new EventEmitter<string>();
	@Input() conteudoBuscaComponent = '';

	debounce = new Subject<string>();

	constructor() { }

	ngOnInit(): void {
		this.debounce
			// debounceTime -> o evento não é invocado a cada keyup e sim após 300ms do ultimo keyup.
			.pipe(debounceTime(300))
			// emit(xpto) -> joga o valor da variável xpto para o template que declarou <ap-busca>.
			.subscribe(filtro => this.aoDigitar.emit(filtro));
	}

	ngOnDestroy(): void {
		// Quando sairmos do componente ele desliga a escuta do debounce.
		this.debounce.unsubscribe();
	}
}