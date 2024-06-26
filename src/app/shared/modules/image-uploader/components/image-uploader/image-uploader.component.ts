import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import heic2any from 'heic2any';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent {
  @Input() btnText: string = 'Добавить фото';

  @Input() image?: string = '';

  @Output() fileSelect = new EventEmitter<File>();

  selectedFiles?: FileList;

  currentFile?: File;

  progress: number = 0;

  message: string = '';

  constructor(private cdr: ChangeDetectorRef, private sanitizer: DomSanitizer) {}

  selectFile(event: any): void {
    this.message = '';
    this.progress = 0;
    this.selectedFiles = event.target.files;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        if (['image/heic', 'image/heif'].includes(this.currentFile.type)) {
          this.hiecImageHandler(this.currentFile);
        } else {
          this.normalImageHandler(file);
        }
      }
    }
  }

  private hiecImageHandler(file: File) {
    heic2any({
      blob: file,
      quality: 0.01,
      toType: 'image/jpeg',
    }).then((result) => {
      // @ts-ignore
      this.image = URL.createObjectURL(result);
      // @ts-ignore
      const _file = new File([result], this.currentFile?.name, { type: 'image/jpeg' });
      this.fileSelect.emit(_file);
      this.cdr.detectChanges();
    });
  }

  private normalImageHandler(file: File) {
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      this.image = e.target.result;
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
    this.fileSelect.emit(file);
    this.cdr.detectChanges();
  }
}
