import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BooksInterface } from '../../models/booksinterface';
import { NgForm } from '@angular/forms/src/directives/ng_form';
 
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  libro: BooksInterface = {
    nombre: '',
    autor: '',
    descripcion: '',
    fecha: '',
    precio: '',
    tema: ''
  };

  constructor(private libroServicio: BookService) { }

  ngOnInit() {
  }

  limpiaCampos(){

  }
  
  onGuardarLibro(miFormulario: NgForm){

    if (miFormulario.valid == true)
    {
      const fechaActual = Date.now();
      this.libro.fecha = fechaActual;
      //Agregar metodo de guardado
      this.libroServicio.addBook(this.libro);
      miFormulario.resetForm;
    }
    else
    {
      console.log('Algo no esta bien');
      window.alert('Algo va mal');
    }
    
  }

}
