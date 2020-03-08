import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../app.model';

@Component({ templateUrl: 'home.component.html', styleUrls: ['./home.component.css'] })
export class HomeComponent {
	pager = {};
	pageOfItems = [];
	phoneNumberPattern = '^d{3}-d{3}-d{4}$';
	isValidFormSubmitted = false;
	user = new User();

	constructor(private http: HttpClient, private route: ActivatedRoute) {}

	private loadPage(page) {
		// get page of items from api
		const { phoneNumber } = this.user;
		this.http
			.get<any>(`/api/getalphaNnumericphoneNumbers?page=${page}&phoneNumber=${phoneNumber}`)
			.subscribe(x => {
				this.pager = x.pager;
				this.pageOfItems = x.pageOfItems;
			});
	}
	onFormSubmit(form: NgForm) {
		this.user.phoneNumber = form.value.phoneNumber;
		this.isValidFormSubmitted = false;
		if (form.invalid) {
			return;
		}
		this.isValidFormSubmitted = true;
		this.activeRouteSubscriptions();
	}

	activeRouteSubscriptions() {
		this.route.queryParams.subscribe(x => {
			debugger;
			this.loadPage(x.page || 1);
		});
	}
}
