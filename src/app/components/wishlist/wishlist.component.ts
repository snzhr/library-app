import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  bookList!: IBook[];
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookList = this.bookService.wishlist;
  }
}
