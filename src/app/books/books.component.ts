import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
	selector: 'app-books',
	templateUrl: './books.component.html',
	styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
	title = 'List of Books';
	books: string[];
	database: DatabaseService;

	inputValue = '';

	constructor(service: DatabaseService) {
		// let service = new DatabaseService();
		this.database = service;
		this.books = this.database.getDatabase();
	}

	onClick(event: Event) {
		console.log('Click!', event);
		this.database.addDatabase('New Book : ' + this.inputValue);
	}

	onKey(event: any) {
		// without type info
		this.inputValue = event.target.value;
	}

	ngOnInit(): void {}
}
