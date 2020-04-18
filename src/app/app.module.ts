import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { DatabaseService } from './database.service';

@NgModule({
	declarations: [AppComponent, BooksComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [DatabaseService],
	bootstrap: [AppComponent],
})
export class AppModule {}
