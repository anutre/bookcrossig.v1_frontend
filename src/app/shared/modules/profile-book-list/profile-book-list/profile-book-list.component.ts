import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-book-list',
  templateUrl: './profile-book-list.component.html',
  styleUrls: ['./profile-book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileBookListComponent {
  @Input() title: string;
}
