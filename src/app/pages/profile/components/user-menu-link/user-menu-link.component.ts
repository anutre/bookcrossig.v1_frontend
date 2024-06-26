import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-menu-link',
  templateUrl: './user-menu-link.component.html',
  styleUrls: ['./user-menu-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuLinkComponent implements OnInit {
  @Input() icon: string | undefined;

  @Input() text: string | undefined;

  @Input() path?: string;

  isExternal = false;

  constructor() {}

  ngOnInit() {
    this.isExternal = !!this.path?.includes('://');
  }
}
