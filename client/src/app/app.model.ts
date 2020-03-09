export class User {
	phoneNumber?: string;
}
export interface IPager {
	totalItems: number;
	currentPage: number;
	pageSize: number;
	totalPages: number;
	startPage: number;
	endPage: number;
	startIndex: number;
	endIndex: number;
	pages: number[];
}

export interface IPageOfItems {
	id: number;
	number: string;
}

export interface IPageItemResponse {
	pager: IPager;
	pageOfItems: IPageOfItems[];
}
