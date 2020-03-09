import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User, IPager } from '../app.model';
import { AppService } from '../app.service';

@Component({ templateUrl: 'home.component.html', styleUrls: ['./home.component.css'] })
export class HomeComponent {
	pager = {} as IPager;
	pageOfItems = [];
	phoneNumberPattern = '^d{3}-d{3}-d{4}$';
	isValidFormSubmitted = false;
	user = new User();

	constructor(private route: ActivatedRoute, private appSvc: AppService) {}

	onKey(event: any) {
		if (event.target.value.length < 10) {
			this.pageOfItems = [];
			this.pager.totalItems = 0;
		}
	}

	loadItems(page) {
		// get page of items from api
		const { phoneNumber } = this.user;
		this.appSvc.getItems(page, phoneNumber).subscribe(x => {
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
			this.loadItems(x.page || 1);
		});
	}
}
