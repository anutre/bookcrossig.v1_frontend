import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAddedBooksComponent } from './profile-added-books.component';

describe('ProfileAddedBooksComponent', () => {
  let component: ProfileAddedBooksComponent;
  let fixture: ComponentFixture<ProfileAddedBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileAddedBooksComponent],
    });
    fixture = TestBed.createComponent(ProfileAddedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
