import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesPlaceholderComponent } from './messages-placeholder.component';

describe('MessagesEmptyComponent', () => {
  let component: MessagesPlaceholderComponent;
  let fixture: ComponentFixture<MessagesPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagesPlaceholderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MessagesPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
