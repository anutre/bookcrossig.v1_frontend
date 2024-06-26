import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from '@layout/base-layout/base-layout.component';
import { AuthGuard } from '@shared/guards/auth.guard';
import { CatalogComponent } from '@pages/catalog/components/catalog/catalog.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: CatalogComponent,
        pathMatch: 'full',
      },
      {
        path: 'map',
        loadChildren: () => import('./pages/map/map.module').then((m) => m.MapModule),
      },
      {
        path: 'privacy-policy',
        title: 'Пользовательское соглашение | Bookcrossing.io',
        loadChildren: () =>
          import('./pages/privacy-policy/privacy-policy.module').then((m) => m.PrivacyPolicyModule),
      },
      {
        path: 'profile',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./pages/profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'messages',
        canActivateChild: [AuthGuard],
        loadChildren: () =>
          import('./pages/messages/messages.module').then((m) => m.MessagesModule),
      },
      {
        path: 'user/:id',
        canActivateChild: [AuthGuard],
        loadChildren: () =>
          import('./pages/dialog-user/dialog-user.module').then((m) => m.DialogUserModule),
      },
      {
        path: 'books',
        canActivateChild: [AuthGuard],
        loadChildren: () => import('./pages/books/books.module').then((m) => m.BooksModule),
      },
      {
        path: 'book',
        loadChildren: () => import('./pages/book/book.module').then((m) => m.BookModule),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'messages/:id',
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./pages/chat/chat.module').then((m) => m.ChatModule),
  },
  {
    path: '404',
    loadChildren: () => import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: 'coming-soon',
    loadChildren: () =>
      import('./pages/coming-soon/coming-soon.module').then((m) => m.ComingSoonModule),
  },
  {
    path: 'terms-and-conditions',
    loadChildren: () =>
      import('./pages/terms-and-conditions/terms-and-conditions.module').then(
        (m) => m.TermsAndConditionsModule,
      ),
  },
  {
    path: 'error',
    loadChildren: () => import('./pages/error/error.module').then((m) => m.ErrorModule),
  },
  {
    path: 'search',
    redirectTo: 'coming-soon',
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
