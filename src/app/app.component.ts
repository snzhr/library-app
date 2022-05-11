import { Component, OnInit } from '@angular/core';
import { IBook } from './model/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'library-app';
  uniqueId = () => Math.random().toString(36).substr(2, 9);
  mockBooks: IBook[] = [
    {
      id: this.uniqueId(),
      title: 'Clean Code',
      author: 'Robert Cecil Martin',
      published_year: 2014,
      category: 'Programming',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg',
    },
    {
      id: this.uniqueId(),
      title: 'Harry Potter',
      author: 'J.K. Rowling',
      published_year: 1997,
      category: 'Fantasy',
      cover_image:
        'https://fadutown.com/wp-content/uploads/2020/08/81YOuOGFCJL.jpg',
    },
    {
      id: this.uniqueId(),
      title: "You don't know JS",
      author: 'K.Sympson',
      published_year: 2014,
      category: 'Programming',
      cover_image:
        'https://images-na.ssl-images-amazon.com/images/I/71DjgMQb3bL.jpg',
    },
  ];

  ngOnInit(): void {
    localStorage.setItem('books', JSON.stringify(this.mockBooks));
  }
}
