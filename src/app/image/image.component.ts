import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {

  @Input() image;
  @Input() i;
  @Output() showFullImage: EventEmitter<number> = new EventEmitter();
  constructor() { }

  showImage() {
    this.showFullImage.emit(this.i)
  }
}
