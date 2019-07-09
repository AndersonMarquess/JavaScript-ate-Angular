import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { Usuario } from '../user/usuario';

@Component({
	selector: 'ap-footer',
	templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

	user$: Observable<Usuario>;

	constructor(private userService: UserService) { }

	ngOnInit(): void {
		this.user$ = this.userService.getUser();
	}

}