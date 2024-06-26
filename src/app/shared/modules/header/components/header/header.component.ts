import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Input() backLink: string;

  constructor(private location: Location, private router: Router) {}

  backClickHandler() {
    if (this.backLink) return;

    const s: any = this.location.getState();

    if (s.navigationId < 2) {
      return this.router.navigateByUrl('/');
    }

    return this.location.back();
  }
}
