import { Component, OnInit } from '@angular/core';
import { BooksInterface } from '../../models/booksinterface';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  libros: BooksInterface[];
  statusEdicion: boolean = false;
  librosEdicion: BooksInterface;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(books => {
      //console.log(books);
      this.libros = books;
    })
  }

  limpiaEstatus(){
    this.statusEdicion = false;
    this.librosEdicion = null;
  }

  editaLibro(event, libro: BooksInterface){
    this.statusEdicion = true;
    const fechaActual = Date.now();
    libro.fecha = fechaActual;
    this.librosEdicion = libro;
  }

  onEditarLibro(libro: BooksInterface){
    this.bookService.updateBook(libro);
    this.limpiaEstatus();
  }

  onEliminaLibro(event, libro: BooksInterface){
    this.bookService.deleteBook(libro);
    this.limpiaEstatus();
  }
  

}
