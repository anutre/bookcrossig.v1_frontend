import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUserScrollerComponent } from './book-user-scroller.component';

describe('BookUserScrollerComponent', () => {
  let component: BookUserScrollerComponent;
  let fixture: ComponentFixture<BookUserScrollerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookUserScrollerComponent],
    });
    fixture = TestBed.createComponent(BookUserScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
