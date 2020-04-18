import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class DatabaseService {
	bookData: string[];

	constructor() {
		this.bookData = ['Book1', 'Book2 ', 'Book3', 'Book4'];
		this.addDatabase('Lucas');
	}

	getDatabase() {
		return this.bookData;
	}

	addDatabase(name: string) {
		if (name != '') {
			this.bookData.push(name);
			console.log('Added Book');
		} else {
			console.log('Book name is empty');
		}
	}
}
