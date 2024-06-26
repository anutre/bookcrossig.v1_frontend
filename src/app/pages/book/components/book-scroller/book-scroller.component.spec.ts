import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookScrollerComponent } from './book-scroller.component';

describe('BookScrollerComponent', () => {
  let component: BookScrollerComponent;
  let fixture: ComponentFixture<BookScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookScrollerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
