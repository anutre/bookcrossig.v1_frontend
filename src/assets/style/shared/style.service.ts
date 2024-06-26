import { Injectable } from '@angular/core';
import { Color } from './color.interface';
import colors from '../variables/colors';

@Injectable({
  providedIn: 'root',
})
export class StyleService {
  get colorCode(): Color {
    return colors;
  }
}
