import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from '@pages/books/components/books/books.component';
import { BooksFormComponent } from '@pages/books/components/books-form/books-form.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
  {
    path: 'new',
    component: BooksFormComponent,
  },
  {
    path: 'new/:isbn',
    component: BooksFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
