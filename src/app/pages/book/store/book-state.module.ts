import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { bookFeatureKey, bookReducer } from '@pages/book/store/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from '@pages/book/store/book.effects';
import { BookService } from '@pages/book/services/book.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(bookFeatureKey, bookReducer),
    EffectsModule.forFeature([BookEffects]),
  ],
  providers: [BookService],
})
export class BookStateModule {}
