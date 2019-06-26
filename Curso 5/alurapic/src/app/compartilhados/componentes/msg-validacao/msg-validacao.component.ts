import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ap-msg-validacao',
	templateUrl: './msg-validacao.component.html',
	styleUrls: ['./msg-validacao.component.css']
})
export class MsgValidacaoComponent implements OnInit {

	@Input() detalhes = '';

	constructor() { }

	ngOnInit() {
	}

}
