import { Component, Output, EventEmitter } from '@angular/core';


import { Store, select } from '@ngrx/store';
import { IState } from '../models/state.model';
import { Observable } from 'rxjs';
import { SliderService } from '../slider.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images$: Observable<any[]>;
  show: boolean = null;

  constructor(private store: Store<IState>, private sliderService: SliderService) {
    this.images$ = store.pipe(select('images'));
    const show$ = store.pipe(select('slider'));
    show$.subscribe(state => this.show = state.show)
  }

  showModal(index: number) {
    this.sliderService.setIndex(index);
  }



}
