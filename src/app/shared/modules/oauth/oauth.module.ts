import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OauthComponent } from './components/oauth/oauth.component';
import { RouterModule } from '@angular/router';
import { IconModule } from '@shared/modules/icon/icon.module';
import { TelegramWidgetModule } from '@shared/modules/oauth/components/telegram-widget/telegram-widget.module';

@NgModule({
  declarations: [OauthComponent],
  imports: [CommonModule, RouterModule, IconModule, TelegramWidgetModule],
  exports: [OauthComponent],
})
export class OauthModule {}
