import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['/map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
  geoSub = new BehaviorSubject(null);

  geo$ = this.geoSub.asObservable();

  ngOnInit() {
    this.initCurrentPosition();
  }

  initCurrentPosition() {
    Geolocation.getCurrentPosition().then((position: Position) =>
      // @ts-ignore
      this.geoSub.next([position.coords.latitude, position.coords.longitude] || null),
    );
  }
}
