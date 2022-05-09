import { Injectable } from '@angular/core';
import { Dao } from '../dao/dao';
import { IBook } from '../model/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}
  bookdao = new Dao();

  readAll() {
    return this.bookdao.getAll();
  }
  read(id: number) {
    return this.bookdao.getById(id);
  }
  create(book: IBook) {
    return this.bookdao.save(book);
  }
}
