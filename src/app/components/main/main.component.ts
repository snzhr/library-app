import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { categories, IBook } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  bookList!: IBook[];
  categories: string[] = [];
  authors: string[] = [];
  constructor(private bookService: BookService) {}

  async ngOnInit(): Promise<void> {
    const res: IBook[] = await this.bookService.readAll();
    this.bookService.allBooks = res;
    this.bookList = res;
    this.categories = this.bookList.map((book) => book['category']);
    this.authors = this.bookList.map((book) => book['author']);
  }

  filterByAlphabet(e: any) {
    if (e.target.value === 'start') {
      this.bookList.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (e.target.value === 'end') {
      this.bookList.sort((a, b) => b.title.localeCompare(a.title));
    }
  }

  filterByCategory(e: any) {
    if (e.target.value === 'all') {
      this.bookList = this.bookService.allBooks;
    } else {
      this.bookList = this.bookService.allBooks.filter(
        (book: IBook) => book.category === e.target.value
      );
    }
  }

  filterByAuthor(e: any) {
    console.log();

    if (e.target.value === 'all') {
      this.bookList = this.bookService.allBooks;
    } else {
      this.bookList = this.bookService.allBooks.filter(
        (book: IBook) => book.author === e.target.value
      );
    }
  }
}
