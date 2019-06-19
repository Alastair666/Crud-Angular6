import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';

import { BookService } from './services/book.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BooksComponent } from './components/books/books.component';
import { AddBookComponent } from './components/add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooksComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'CRUDAngular6'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
