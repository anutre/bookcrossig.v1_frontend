import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewedBooksComponent } from './profile-viewed-books.component';

describe('ProfileViwedBooksComponent', () => {
  let component: ProfileViewedBooksComponent;
  let fixture: ComponentFixture<ProfileViewedBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileViewedBooksComponent],
    });
    fixture = TestBed.createComponent(ProfileViewedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
