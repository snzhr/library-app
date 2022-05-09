import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { categories } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

const regex =
  '((http|https)://)(www.)?' +
  '[a-zA-Z0-9@:%._\\+~#?&//=]' +
  '{2,256}\\.[a-z]' +
  '{2,6}\\b([-a-zA-Z0-9@:%' +
  '._\\+~#?&//=]*)';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  bookForm!: FormGroup;
  categories: string[] = categories;
  title: FormControl = new FormControl('', Validators.required);
  author: FormControl = new FormControl('', Validators.required);
  category: FormControl = new FormControl('', Validators.required);
  image: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(regex),
  ]);
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      title: this.title,
      author: this.author,
      category: this.category,
      image: this.image,
    });
  }

  add() {
    if (this.bookForm.valid) {
      this.bookService.create({
        ...this.bookForm.value,
        id: Date.now(),
      });
    } else {
      console.log('Please fill the form');
    }
  }
}
