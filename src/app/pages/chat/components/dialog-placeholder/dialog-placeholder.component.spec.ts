import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPlaceholderComponent } from './dialog-placeholder.component';

describe('DialogPlaceholderComponent', () => {
  let component: DialogPlaceholderComponent;
  let fixture: ComponentFixture<DialogPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogPlaceholderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
