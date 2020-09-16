import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { IState } from './models/state.model';
import { setIndex, showModal, increment, decrement, setSrc, setLength } from './store/slider.actions';
import { sliderState } from "./models/state.model";


@Injectable({
  providedIn: 'root'
})
export class SliderService {
  images: any[];
  state: sliderState;

  constructor(private store: Store<IState>) {
    const slider$ = store.pipe(select('slider'));
    const images$ = store.pipe(select('images'));
    images$.subscribe(images => { this.images = images })
    slider$.subscribe(state => this.state = state)
  }

  setIndex(index: number) {
    this.store.dispatch(setIndex({ index }));
    this.store.dispatch(showModal({ show: true }));
    this.setState()
  }

  setState() {
    this.store.dispatch(setSrc({ src: this.images[this.state.index].urls.regular }));
    this.store.dispatch(setLength({ length: this.images.length }));
  }

  hideModal() {
    this.store.dispatch(showModal({ show: false }))
  }

  nextImage() {
    if (this.state.index === this.images.length - 1) {
      this.setIndex(0);
      return;
    }
    this.store.dispatch(increment());
    this.setState()
  }

  prevImage() {
    if (this.state.index === 0) {
      this.setIndex(this.images.length - 1)
      return;
    }
    this.store.dispatch(decrement());
    this.setState()
  }
}
