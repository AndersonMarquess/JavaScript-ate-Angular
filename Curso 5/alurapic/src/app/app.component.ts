import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	// Template é o nome dado a parte html.
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
// nome do arquivo: app.component.ts
// nome da classe: AppComponent
export class AppComponent {
	title = 'alurapic';

	todasAsFotos = [
		{
			urlImg: "https://images.unsplash.com/photo-1560859581-d51f66c66233?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375",
			imgDescricao: "Beira do mar dia"
		},
		{
			urlImg: "https://images.unsplash.com/photo-1560932668-46f7a662129e?ixlib=rb-1.2.1&auto=format&fit=crop&w=332",
			imgDescricao: "Beira do mar tarde"
		}
	];
}
