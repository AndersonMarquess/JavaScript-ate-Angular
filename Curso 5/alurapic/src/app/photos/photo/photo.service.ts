import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from "../../../environments/environment";
import { Photo } from './Photo';
import { PhotoComment } from './photo-comment';

const API_URL = environment.ApiUrl;

@Injectable({
	// root - quando o angular injetar o PhotoService, 
	// a mesma instância será disponibilizada para qualquer componente. (singleton)
	providedIn: 'root'
})
export class PhotoService {

	// injeção de dependência do HttpClient, necessário importar seu módulo no app.module.ts.
	constructor(private httpClient: HttpClient) { }

	public buscarFotosDoUsuario(nomeUsuario: string): Observable<Photo[]> {
		const observable = this.httpClient.get<Photo[]>(`${API_URL}/${nomeUsuario}/photos`);
		// o Observable só fará o get, se alguém estiver subscrito.
		return observable;
	}

	public buscarFotosDoUsuarioComPaginacao(nomeUsuario: string, numPagina: number): Observable<Photo[]> {
		const parametros = new HttpParams().append('page', numPagina.toString());
		return this.httpClient.get<Photo[]>(`${API_URL}/${nomeUsuario}/photos`, { params: parametros });
	}

	public publicarFoto(description: string, allowComments: boolean, fotoArquivo: File): Observable<any> {
		const endereco = `${API_URL}/photos/upload`;

		const formData = new FormData();
		formData.append("description", description);
		formData.append("allowComments", allowComments ? "true" : "false");
		formData.append("imageFile", fotoArquivo);

		return this.httpClient.post(endereco, formData, { observe: 'events', reportProgress: true });
	}

	public buscarPorId(idPhoto: number): Observable<Photo> {
		const endereco = `${API_URL}/photos/${idPhoto}`;
		return this.httpClient.get<Photo>(endereco);
	}

	public bucarComentarios(idPhoto: number): Observable<PhotoComment[]> {
		const endereco = `${API_URL}/photos/${idPhoto}/comments`;
		return this.httpClient.get<PhotoComment[]>(endereco);
	}

	public addComentario(comentario: string, idPhoto: number): Observable<any> {
		const endereco = `${API_URL}/photos/${idPhoto}/comments`;
		const objPost = { commentText: comentario };
		return this.httpClient.post(endereco, objPost);
	}

	public removerFoto(idPhoto: number): Observable<any> {
		const endereco = `${API_URL}/photos/${idPhoto}`;
		return this.httpClient.delete(endereco);
	}

	/**
	 * Retorna Observable<boolean> com true para sucesso e false para erro.
	 * Lança uma exceção em qualquer outro cenário.
	 */
	public gosteiDaFotoComId(idPhoto: number): Observable<boolean> | any {
		const endereco = `${API_URL}/photos/${idPhoto}/like`;

		return this.httpClient
			.post(endereco, {}, { observe: 'response' })
			.pipe(map(resp => true))
			.pipe(catchError(erro => {
				// of(false) => cria um Observable<boolean> com valor false.
				return erro.status == '304' ? of(false) : throwError(erro);
			}));
	}
}