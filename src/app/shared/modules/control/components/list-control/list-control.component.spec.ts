import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListControlComponent } from './list-control.component';

describe('ListComponent', () => {
  let component: ListControlComponent;
  let fixture: ComponentFixture<ListControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
