import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  public linkClass = 'c-link c-link--main';

  public linkType = 'main';

  public isExternal = false;

  public linkPath = '';

  @Input() target = '_self';

  @Input()
  set to(path: string) {
    this.isExternal = path.includes('://');
    this.linkPath = path;
  }

  @Input()
  set mode(variant: string | string[]) {
    if (!variant) return;

    if (Array.isArray(variant)) {
      let mods = '';
      variant.forEach((item: string) => {
        mods += ` c-link--${item}`;
      });

      this.linkClass += mods;
      this.linkType = mods;

      return;
    }

    this.linkClass += ` c-link--${variant}`;
    this.linkType = variant;
  }

  @Input()
  set className(name: string) {
    if (name) {
      this.linkClass += name;
    }
  }

  constructor() {}
}
