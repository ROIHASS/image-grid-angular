import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'image-grid';

  @ViewChild('el') el: ElementRef<HTMLDivElement>

  scroll() {
    this.el.nativeElement.scroll(0,0)
  }

}
