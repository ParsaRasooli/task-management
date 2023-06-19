import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailbaseComponent } from './detailbase.component';

describe('DetailbaseComponent', () => {
  let component: DetailbaseComponent;
  let fixture: ComponentFixture<DetailbaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailbaseComponent]
    });
    fixture = TestBed.createComponent(DetailbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
