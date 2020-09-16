import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SliderEffects } from "./slider.effects";

import { pageReducer } from "./store/page.reducer";
import { sliderReducer } from "./store/slider.reducer";
import { imagesReducer } from "./store/images.reducer";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShowImageModalComponent } from './show-image-modal/show-image-modal.component';
import { SliderDirective } from './slider.directive';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageComponent,
    HeaderComponent,
    FooterComponent,
    ShowImageModalComponent,
    SliderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // EffectsModule.forRoot([SliderEffects]),
    StoreModule.forRoot({ page: pageReducer, images: imagesReducer, slider: sliderReducer }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    // StoreDevtoolsModule.instrument(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
