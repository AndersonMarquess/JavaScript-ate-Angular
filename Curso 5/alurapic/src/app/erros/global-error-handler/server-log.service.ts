import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServerLog } from './server-log';

const API_URL = environment.ServerLogUrl;

@Injectable({ providedIn: "root" })
export class ServerLogService {

	constructor(private httpClient: HttpClient) { }

	logarErro(serverLog: ServerLog): Observable<any> {
		const endereco = API_URL + "/infra/log";
		return this.httpClient.post(endereco, serverLog);
	}
}