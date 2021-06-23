import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCarouselComponentComponent } from './show-carousel-component.component';

describe('ShowCarouselComponentComponent', () => {
  let component: ShowCarouselComponentComponent;
  let fixture: ComponentFixture<ShowCarouselComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCarouselComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCarouselComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
