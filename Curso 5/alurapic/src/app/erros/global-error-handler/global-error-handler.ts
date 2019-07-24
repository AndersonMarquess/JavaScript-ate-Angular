import { LocationStrategy } from '@angular/common';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';
import { environment } from 'src/environments/environment';
import * as StackTrace from 'stacktrace-js';
import { ServerLogService } from './server-log.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

	constructor(private injector: Injector) { }

	handleError(error: any): void {
		// Injeção com injector do Angular.
		const location = this.injector.get(LocationStrategy);
		const userService = this.injector.get(UserService);
		const servLogService = this.injector.get(ServerLogService);
		const router = this.injector.get(Router);

		const url = this.getPathLocation(location);
		const msgErro = this.getMsgErro(error);

		this.redirecionarParaPaginaDeErro(router);

		// Transforma cada item do erro em array
		StackTrace.fromError(error)
			.then(stackFrames => {
				const stackAsString = this.transformarArrayErrosEmString(stackFrames);
				console.log(msgErro);
				console.log(stackAsString);
				this.enviarLogParaOServidor(servLogService, msgErro, url, userService.getNomeUsuario(), stackAsString);
			});
	}

	private redirecionarParaPaginaDeErro(router: Router) {
		if (environment.production) {
			router.navigate(['/erro']);
		}
	}

	private enviarLogParaOServidor(serverLogService: ServerLogService, message: string, url: string, userName: string, stack: string): void {
		serverLogService.logarErro({ message, url, userName, stack })
			.subscribe(
				suc => console.log("Log de erro enviado para o servidor com sucesso."),
				erro => {
					console.log(erro);
					console.log("Erro ao tentar log para o servidor.");
				}
			);
	}

	private getPathLocation(location: any): string {
		return location instanceof LocationStrategy ? location.path() : "";
	}

	private transformarArrayErrosEmString(stackFrames: StackTrace.StackFrame[]): string {
		return stackFrames.map(s => s.toString()).join("\n");
	}

	private getMsgErro(error: any): string {
		return error.message ? error.message : error.toString();
	}
}