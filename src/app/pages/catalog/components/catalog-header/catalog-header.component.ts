import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-catalog-header',
  templateUrl: './catalog-header.component.html',
  styleUrls: ['./catalog-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogHeaderComponent {
  constructor() {}
}
