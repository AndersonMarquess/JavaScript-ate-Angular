import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	// Template é o nome dado a parte html.
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
// nome do arquivo: app.component.ts
// nome da classe: AppComponent
export class AppComponent implements OnInit {

	constructor(private activatedRoute: ActivatedRoute, private router: Router, private titleService: Title) { }

	ngOnInit(): void {
		this.alterarTitlePaginaComValorDefinidoNaRota();
	}

	private alterarTitlePaginaComValorDefinidoNaRota(): void {
		this.router.events
			.pipe(filter(event => event instanceof NavigationEnd))
			.pipe(map(r => this.activatedRoute))
			.pipe(map(activRoute => {
				while (activRoute.firstChild) {
					activRoute = activRoute.firstChild;
					return activRoute;
				}
			}))
			.pipe(switchMap(activRoute => activRoute.data))
			.subscribe(event => this.titleService.setTitle(event.titulo));
	}
}
