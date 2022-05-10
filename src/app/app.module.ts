import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { BookComponent } from './components/book/book.component';
import { SinglebookComponent } from './components/singlebook/singlebook.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WishlistComponent,
    HeaderComponent,
    BookComponent,
    SinglebookComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
