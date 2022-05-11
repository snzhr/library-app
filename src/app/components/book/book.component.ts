import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { categories, IBook } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

const regex = "(http)?s?:?(//[^'']*.(?:png|jpg|jpeg|gif|png|svg))";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  currentBookId!: string;
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
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      title: this.title,
      author: this.author,
      category: this.category,
      cover_image: this.cover_image,
      published_year: this.published_year,
    });

    const bookId = this.route.snapshot.params['id'];
    this.currentBookId = bookId;
    if (bookId) {
      this.bookService.read(bookId).then((res) => {
        this.bookForm.setValue({
          title: res.title,
          author: res.author,
          category: res.category,
          cover_image: res.cover_image,
          published_year: res.published_year,
        });
      });
    }
  }

  async add() {
    if (this.bookForm.valid) {
      const res = await this.bookService.create({
        ...this.bookForm.value,
        id: this.bookService.uniqueId(),
      });
      console.log('Created ', res);
      this.bookForm.reset();
    } else {
      console.log('Please fill the form');
    }
  }

  async update() {
    if (this.bookForm.valid) {
      const res = await this.bookService.update({
        ...this.bookForm.value,
        id: this.currentBookId,
      });
      console.log('Updated ', res);
      this.router.navigate(['']);
    } else {
      console.log('Please fill the form');
    }
  }

  async delete() {
    const res = await this.bookService.remove(this.currentBookId);
    console.log(res, ' successfully deleted');
    this.router.navigate(['']);
  }
}
