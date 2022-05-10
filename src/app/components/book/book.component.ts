import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { categories } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

const regex = "(http)?s?:?(//[^'']*.(?:png|jpg|jpeg|gif|png|svg))";

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
  published_year: FormControl = new FormControl(null, Validators.required);
  cover_image: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(regex),
  ]);
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      title: this.title,
      author: this.author,
      category: this.category,
      cover_image: this.cover_image,
      published_year: this.published_year,
    });
  }

  async add() {
    if (this.bookForm.valid) {
      const res = this.bookService.create({
        ...this.bookForm.value,
        id: Date.now(),
      });
      console.log('Created ', res);
      this.bookForm.reset();
    } else {
      console.log('Please fill the form');
    }
  }
}
