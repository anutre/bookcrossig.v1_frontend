import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeToggleComponent } from '@shared/modules/theme-toggle/components/theme-toggle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ThemeToggleComponent],
  imports: [CommonModule, MatSlideToggleModule, FormsModule],
  exports: [ThemeToggleComponent],
})
export class ThemeToggleModule {}
