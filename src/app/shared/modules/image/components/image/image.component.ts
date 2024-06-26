import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  public srcMain: string | null;

  // public srcWebP: string | null = null;

  @Input()
  set src(src: string | null | undefined) {
    if (src) {
      this.srcMain = src;
      // this.srcWebP = src.replace(regexMap.imageFormatPattern, '.webp');
    }
  }

  @Input() alt: string = '';

  @Input() auto: boolean = false;

  @Input() initWidth: string = '190';

  @Input() initHeight: string = '190';

  @Input() loading: 'lazy' | 'eager' | 'auto' = 'lazy';

  constructor() {}
}
