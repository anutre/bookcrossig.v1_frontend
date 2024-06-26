import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiStateModule } from '@store/ui';
import { BaseLayoutComponent } from '@layout/base-layout/base-layout.component';
import { BaseLoaderModule } from '@shared/modules/base-loader/base-loader.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserStateModule } from '@store/user';
import { CatalogModule } from '@pages/catalog/catalog.module';
import { PanelModule } from '@shared/modules/panel/panel.module';

import { AppStateModule } from '@store/app';
import { environment } from '../environments/environment';
import { AuthStateModule } from '@store/auth';
import { HttpAuthInterceptor } from '@shared/interceptors/http-auth.interceptor';
import { HttpHeadersInterceptor } from '@shared/interceptors/http-headers.interceptor';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { ToastrModule } from 'ngx-toastr';
import { HttpErrorStateModule } from '@store/http-error';
import { MetaStateModule } from '@store/meta';
import { GeoStateModule } from '@store/geo';

@NgModule({
  declarations: [AppComponent, BaseLayoutComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'book-crossing' }),
    AppRoutingModule,
    CatalogModule,
    PanelModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BaseLoaderModule,
    HttpClientModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
    AppStateModule,
    UiStateModule,
    AuthStateModule,
    UserStateModule,
    MetaStateModule,
    GeoStateModule,
    HttpErrorStateModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { width: '100vw', height: '100vh' },
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeadersInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
