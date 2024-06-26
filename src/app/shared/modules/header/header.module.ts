import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LinkModule } from '@shared/modules/link/link.module';
import { IconModule } from '@shared/modules/icon/icon.module';
import { RouterModule } from '@angular/router';
import { ThemeToggleModule } from '@shared/modules/theme-toggle/theme-toggle.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, LinkModule, IconModule, RouterModule, ThemeToggleModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
