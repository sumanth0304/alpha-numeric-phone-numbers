import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPageItemResponse } from './app.model';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
	constructor(private http: HttpClient) {}

	getItems(page, phoneNumber): Observable<IPageItemResponse> {
		return this.http.get<IPageItemResponse>(
			`/api/getalphaNnumericphoneNumbers?page=${page}&phoneNumber=${phoneNumber}`
		);
	}
}
