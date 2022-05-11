import { Injectable } from '@angular/core';
import { Dao } from '../dao/dao';
import { IBook } from '../model/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  allBooks: IBook[] = [];
  wishlist: IBook[] = [];
  constructor() {}
  bookdao = new Dao();

  readAll(): Promise<IBook[]> {
    return this.bookdao.getAll();
  }
  read(id: string): Promise<IBook> {
    return this.bookdao.getById(id);
  }
  create(book: IBook): Promise<IBook> {
    return this.bookdao.save(book);
  }
  update(book: IBook) {
    return this.bookdao.updateBook(book);
  }
  remove(id: string) {
    return this.bookdao.deleteBook(id);
  }

  uniqueId = () => Math.random().toString(36).substr(2, 9);
}
