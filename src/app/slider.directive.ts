import { Directive, HostListener } from '@angular/core';
import { SliderService } from "./slider.service";

@Directive({
  selector: '[appSlider]'
})
export class SliderDirective {
  private xDown = null;
  private yDown = null;

  constructor(private sliderSevice: SliderService) { }

  @HostListener('pointermove', ['$event']) pointerMove(e: PointerEvent) {
    console.log('pointermove');
    this.xDown = e.clientX;
    this.yDown = e.clientY;
  }


  @HostListener('pointerdown', ['$event']) pointerDown(e:PointerEvent) {
    console.log('leave');
    if (!this.xDown || !this.yDown) {
      return;
    }
    var xUp = e.clientX;
    var yUp = e.clientY;
    var xDiff = this.xDown - xUp;
    var yDiff = this.yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
      if (xDiff > 0) {
        this.sliderSevice.nextImage();
        console.log('next');
        /* left swipe */
      } else {
        this.sliderSevice.prevImage();
        console.log('prev');
        /* right swipe */
      }
    } else {
      if (yDiff > 0) {
        /* up swipe */
      } else {
        /* down swipe */
      }
    }
    /* reset values */
    this.xDown = null;
    this.yDown = null;
  }
}
