import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroModalComponent } from './intro-modal.component';

describe('OntroModalComponent', () => {
  let component: IntroModalComponent;
  let fixture: ComponentFixture<IntroModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntroModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IntroModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
