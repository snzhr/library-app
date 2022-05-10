import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.scss'],
})
export class SinglebookComponent implements OnInit, DoCheck {
  @Input() book!: IBook;
  bookmarked: boolean = false;
  constructor(private bookService: BookService) {}

  ngOnInit(): void {}
  ngDoCheck(): void {
    const found = this.bookService.wishlist.find(
      (item) => item.id === this.book.id
    );
    if (found) {
      this.bookmarked = true;
    } else {
      this.bookmarked = false;
    }
  }
  bookmark() {
    const found = this.bookService.wishlist.find(
      (item) => item.id === this.book.id
    );
    if (found) {
      this.bookService.wishlist = this.bookService.wishlist.filter(
        (item) => item.id !== this.book.id
      );
    } else {
      this.bookService.wishlist.push(this.book);
    }
  }
}
