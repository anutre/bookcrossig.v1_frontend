import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePath',
})
export class ImageSwitchPipe implements PipeTransform {
  transform(imageName: string, extension = 'png', url = '/assets/images') {
    return `${url}/${imageName}.${extension}`;
  }
}
