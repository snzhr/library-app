import { Injectable } from '@angular/core';
import { Dao } from '../dao/dao';
import { IBook } from '../model/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}
  bookdao = new Dao();

  readAll(): Promise<IBook[]> {
    return this.bookdao.getAll();
  }
  read(id: number): Promise<IBook> {
    return this.bookdao.getById(id);
  }
  create(book: IBook): Promise<IBook> {
    return this.bookdao.save(book);
  }
}
