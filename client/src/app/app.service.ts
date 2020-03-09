import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
	constructor(private http: HttpClient) {}
	getItems(page, phoneNumber) {
		return this.http.get<any>(
			`/api/getalphaNnumericphoneNumbers?page=${page}&phoneNumber=${phoneNumber}`
		);
	}
}
