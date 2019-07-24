import { Component } from '@angular/core';

@Component({
	selector: 'ap-menu',
	templateUrl: './menu.componenet.html',
	styleUrls: ['./menu.componenet.css']
})
export class MenuComponent {

	estaVisivel = false;

	alternarVisibilidade(): void {
		this.estaVisivel = !this.estaVisivel;
	}
}