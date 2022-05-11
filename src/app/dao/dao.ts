import { IBook } from '../model/book';

export class Dao {
  save(book: IBook): Promise<IBook> {
    return new Promise((resolve, reject) => {
      let books: IBook[] = [];
      if (localStorage.getItem('books')) {
        books = JSON.parse(localStorage.getItem('books') as string);
      }
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
      resolve(book);
    });
  }

  getAll(): Promise<IBook[] | []> {
    return new Promise((resolve, reject) => {
      let data = localStorage.getItem('books');
      resolve(JSON.parse(data as string) || []);
    });
  }

  getById(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let books = JSON.parse(localStorage.getItem('books') as string);
      const book = books.find((item: IBook) => item.id == id);
      resolve(book);
    });
  }

  updateBook(book: IBook): Promise<IBook> {
    return new Promise((resolve, reject) => {
      let books = JSON.parse(localStorage.getItem('books') as string);
      const idx = books.findIndex((item: IBook) => item.id == book.id);
      books.splice(idx, 1, book);
      localStorage.setItem('books', JSON.stringify(books));
      resolve(book);
    });
  }

  deleteBook(id: string) {
    return new Promise((resolve, reject) => {
      let books = JSON.parse(localStorage.getItem('books') as string);
      const idx = books.findIndex((i: any) => i.id == id);
      const removed = books.splice(idx, 1);
      localStorage.setItem('books', JSON.stringify(books));
      resolve(removed[0]);
    });
  }
}
