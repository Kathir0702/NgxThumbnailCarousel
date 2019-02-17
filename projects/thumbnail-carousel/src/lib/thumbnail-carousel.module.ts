import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {SlickCarouselComponent, SlickItemDirective} from './thumbnail-carousel.component';

export * from './thumbnail-carousel.component';
@NgModule({
  declarations: [SlickCarouselComponent, SlickItemDirective],
  imports: [
    CommonModule
  ],
  exports: [SlickCarouselComponent,SlickItemDirective]
})
export class ThumbnailCarouselModule { }
