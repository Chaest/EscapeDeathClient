import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
	providedIn: 'root'
})
export class RoomService {

	constructor(private http: HttpClient) { }

	getAll(): Observable<any> {
		return this.http.get('http://localhost:8989/rooms');
	}
}
