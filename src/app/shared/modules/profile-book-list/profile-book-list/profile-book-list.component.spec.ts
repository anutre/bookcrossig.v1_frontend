import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBookListComponent } from './profile-book-list.component';

describe('ProfileBookListComponent', () => {
  let component: ProfileBookListComponent;
  let fixture: ComponentFixture<ProfileBookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileBookListComponent],
    });
    fixture = TestBed.createComponent(ProfileBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
