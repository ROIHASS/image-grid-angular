import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store, select } from '@ngrx/store';
import { increment, decrement, setPage } from './store/page.actions';
import { getImages } from './store/images.actions';
import { IState } from './models/state.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private basesUrl = 'https://api.unsplash.com/photos/?client_id=gm_k7SKBCzMdY8HfKboCpd5C9KGWXj8U_D6H8E-r1uY&per_page=15&page=';  // URL to web api
  private page: number = 1;

  httpOptions = {
    headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'multipart/form-data' })
  };

  constructor(private http: HttpClient, private store: Store<IState>) {
    const page$ = store.pipe(select('page'));
    page$.subscribe((page) => {
      this.page = page
    });
    this.getImages();
  }

  private getImages(): any {
    this.http.get(this.basesUrl + this.page).subscribe((images: any[]) => {
      this.store.dispatch(getImages({ images }))
    })
    scroll(0,0)
  }

  getNextPage(): void {
    this.store.dispatch(increment());
    this.getImages();
  }

  getPrevPage(): void {
    if (this.page === 1) {
      return;
    }
    this.store.dispatch(decrement());
    this.getImages();
  }

  setPage(page: number) {
    if (isNaN(page) || page == this.page) {
      return;
    }
    this.store.dispatch(setPage({ page }));
    this.getImages();
  }
}
