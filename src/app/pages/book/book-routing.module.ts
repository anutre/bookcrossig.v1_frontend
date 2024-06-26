import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from '@pages/book/components/book/book.component';
import { BookEditFormComponent } from '@pages/book/components/book-edit-form/book-edit-form.component';

const routes: Routes = [
  {
    path: ':id',
    component: BookComponent,
  },
  {
    path: 'edit/:id',
    component: BookEditFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}
