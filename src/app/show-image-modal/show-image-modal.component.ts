import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SliderService } from '../slider.service';

import { Store, select } from '@ngrx/store';
import { IState } from '../models/state.model';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-show-image-modal',
  templateUrl: './show-image-modal.component.html',
  styleUrls: ['./show-image-modal.component.css']
})

export class ShowImageModalComponent implements AfterViewInit {
  state: any;
  @ViewChild('someEl') el: ElementRef<HTMLDivElement>;
  constructor(private store: Store<IState>, private sliderService: SliderService) {
    store.pipe(select('slider')).subscribe(state => this.state = state)
  }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
  closeModal() {
    this.sliderService.hideModal();
  }

  prevImage() {
    this.sliderService.prevImage();
  }

  nextImage() {
    this.sliderService.nextImage()
  }

  keyDown(e) {
    if (e.keyCode === 39) {
      this.nextImage();
      return;
    }
    if (e.keyCode === 37) {
      this.prevImage();
      return;
    }
    if (e.keyCode === 27) {
      this.closeModal();
      return;
    }
  }
}
