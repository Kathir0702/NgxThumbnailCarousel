import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlickCarouselComponent } from './thumbnail-carousel.component';

describe('ThumbnailCarouselComponent', () => {
  let component: SlickCarouselComponent;
  let fixture: ComponentFixture<SlickCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlickCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlickCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
