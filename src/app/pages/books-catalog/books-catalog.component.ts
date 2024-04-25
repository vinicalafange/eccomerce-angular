import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-books-catalog',
  standalone: true,
  imports: [MatCardModule, NgFor],
  templateUrl: './books-catalog.component.html',
  styleUrl: './books-catalog.component.css'
})
export class BooksCatalogComponent {
  bookList = [
    {
      "title": "All The Bright Places",
      "author": "Jennifer Niven",
      "description": "lorem ipsum",
      "publishing-date": "2015/01/06",
      "price": 39.99,
    },
    {
      "title": "The Lightning Thief",
      "author": "Rick Riordan",
      "description": "lorem ipsum",
      "publishing-date": "2005/08/06",
      "price": 35.99,
    },
    {
      "title": "Harry Potter and The Philosopher's Stone",
      "author": "Emma Watson",
      "description": "lorem ipsum",
      "publishing-date": "1992/03/09",
      "price": 30.99,
    }
  ]
}
