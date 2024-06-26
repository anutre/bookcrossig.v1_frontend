import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogHeaderComponent } from './catalog-header.component';

describe('HomeHeaderComponent', () => {
  let component: CatalogHeaderComponent;
  let fixture: ComponentFixture<CatalogHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatalogHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
