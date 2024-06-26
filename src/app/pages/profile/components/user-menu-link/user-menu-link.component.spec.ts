import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenuLinkComponent } from './user-menu-link.component';

describe('UserMenuLinkComponent', () => {
  let component: UserMenuLinkComponent;
  let fixture: ComponentFixture<UserMenuLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserMenuLinkComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserMenuLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
