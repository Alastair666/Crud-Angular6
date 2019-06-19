import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { BooksInterface } from '../models/booksinterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  booksCollection: AngularFirestoreCollection<BooksInterface>;
  books: Observable<BooksInterface[]>;
  bookDoc: AngularFirestoreDocument<BooksInterface>;


  constructor(public afs: AngularFirestore) 
  {
    this.booksCollection = afs.collection<BooksInterface>('libros', ref => ref.orderBy('fecha', 'desc'));
    this.books = this.booksCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as BooksInterface;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
    //this.books = afs.collection('libros').valueChanges();
  }

  getBooks()
  {
    return this.books;
  }

  addBook(book: BooksInterface)
  {
    console.log('Añade Libro');
    this.booksCollection.add(book);
  }

  deleteBook(libro: BooksInterface)
  {
    console.log('Elimina Libro');
    this.bookDoc = this.afs.doc(`libros/${libro.id}`);
    this.bookDoc.delete();

  }

  updateBook(libro: BooksInterface)
  {
    console.log('Actualiza Libro');
    this.bookDoc = this.afs.doc(`libros/${libro.id}`);
    this.bookDoc.update(libro);
  }
}
