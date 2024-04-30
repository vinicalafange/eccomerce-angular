import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { IBook } from '../../models/books.interface';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  @Input() book: IBook = {
    "id": 1,
    "title": "All The Bright Places",
    "author": "Jennifer Niven",
    "description": "lorem ipsum",
    "publishing_date": new Date("2015-01-06"),
    "price": 39.99,
  };
}
