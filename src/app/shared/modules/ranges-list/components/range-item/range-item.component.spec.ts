import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeItemComponent } from './range-item.component';

describe('RangeItemComponent', () => {
  let component: RangeItemComponent;
  let fixture: ComponentFixture<RangeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RangeItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RangeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
