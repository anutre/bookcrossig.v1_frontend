import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from '@pages/books/services/books.service';
import { StoreModule } from '@ngrx/store';
import { booksFeatureKey, booksReducer } from '@pages/books/store/books.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from '@pages/books/store/books.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(booksFeatureKey, booksReducer),
    EffectsModule.forFeature([BooksEffects]),
  ],
  providers: [BooksService],
})
export class BooksStateModule {}
