import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { BookCardComponent } from './../../components/book-card/book-card.component';
import { IBook } from '../../models/books.interface';


@Component({
  selector: 'app-books-catalog',
  standalone: true,
  imports: [NgFor, NgIf, BookCardComponent],
  templateUrl: './books-catalog.component.html',
  styleUrl: './books-catalog.component.css'
})
export class BooksCatalogComponent {
  bookList: IBook[] = [
    {
      "id": 1,
      "title": "All The Bright Places",
      "author": "Jennifer Niven",
      "description": "lorem ipsum",
      "publishing_date": new Date("2015-01-06"),
      "price": 39.99,
    },
    {
      "id": 2,
      "title": "The Lightning Thief",
      "author": "Rick Riordan",
      "description": "lorem ipsum",
      "publishing_date": new Date("2005-08-06"),
      "price": 35.99,
    },
    {
      "id": 3,
      "title": "Harry Potter and The Philosopher's Stone",
      "author": "Emma Watson",
      "description": "lorem ipsum",
      "publishing_date": new Date("1992-03-09"),
      "price": 30.99,
    }
  ]
}
