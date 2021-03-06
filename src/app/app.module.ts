import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { DatabaseService } from './database.service';
import { AddbookFormComponent } from './addbook-form/addbook-form.component';

@NgModule({
	declarations: [AppComponent, BooksComponent, AddbookFormComponent],
	imports: [BrowserModule, AppRoutingModule],
	providers: [DatabaseService],
	bootstrap: [AppComponent],
})
export class AppModule {}
