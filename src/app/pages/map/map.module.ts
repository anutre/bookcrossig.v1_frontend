import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './components/map/map.component';
import { ImageModule } from '@shared/modules/image/image.module';
import { LinkModule } from '@shared/modules/link/link.module';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';

@NgModule({
  declarations: [MapComponent],
  imports: [CommonModule, MapRoutingModule, ImageModule, LinkModule, AngularYandexMapsModule],
})
export class MapModule {}
