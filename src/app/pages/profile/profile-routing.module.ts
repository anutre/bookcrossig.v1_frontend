import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { PersonalDetailsComponent } from '@pages/profile/components/personal-details/personal-details.component';
import { ProfileAddedBooksComponent } from '@pages/profile/components/profile-added-books/profile-added-books.component';
import { ProfileViewedBooksComponent } from '@pages/profile/components/profile-viewed-books/profile-viewed-books.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
  {
    path: 'personal-details',
    component: PersonalDetailsComponent,
  },
  {
    path: 'add-book',
    component: ProfileAddedBooksComponent,
  },
  {
    path: 'recent-books',
    component: ProfileViewedBooksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
