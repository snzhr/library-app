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

  getById(id: number): Promise<IBook> {
    return new Promise((resolve, reject) => {
      let books = localStorage.getItem('books');
      const book = JSON.parse(books as string).find(
        (item: IBook) => item.id === id
      );
      resolve(book);
    });
  }
}
