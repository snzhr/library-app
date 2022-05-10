import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  bookList!: IBook[];
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.readAll().then((res: IBook[]) => (this.bookList = res));
  }
}
