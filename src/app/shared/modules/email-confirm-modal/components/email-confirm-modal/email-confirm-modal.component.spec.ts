import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailConfirmModalComponent } from './email-confirm-modal.component';

describe('EmailConfirmModalComponent', () => {
  let component: EmailConfirmModalComponent;
  let fixture: ComponentFixture<EmailConfirmModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailConfirmModalComponent],
    });
    fixture = TestBed.createComponent(EmailConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
