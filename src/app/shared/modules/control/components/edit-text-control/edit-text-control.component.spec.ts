import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTextControlComponent } from './edit-text-control.component';

describe('EditTextControlComponent', () => {
  let component: EditTextControlComponent;
  let fixture: ComponentFixture<EditTextControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTextControlComponent],
    });
    fixture = TestBed.createComponent(EditTextControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
