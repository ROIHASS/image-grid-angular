import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../http.service';

import { Store, select } from '@ngrx/store';
import { IState } from '../models/state.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  page: number;
  @Output() scroll: EventEmitter<any> = new EventEmitter(null)

  constructor(private httpService: HttpService, private store: Store<IState>) {
    const page$ = store.pipe(select('page'));
    page$.subscribe(page => {
      this.page = page
    })
  }

  getPage() {
    return this.page;
  }

  setPage(page) {
    this.page = page;
  }

  enterPage() {
    this.httpService.setPage(this.page);
    this.scroll.emit()
  }

  getNextPage() {
    this.httpService.getNextPage()
    this.scroll.emit()
  }

  getPrevPage() {
    this.httpService.getPrevPage()
    this.scroll.emit()

  }
}
