import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FronteendFooterComponent } from './fronteend-footer.component';

describe('FronteendFooterComponent', () => {
  let component: FronteendFooterComponent;
  let fixture: ComponentFixture<FronteendFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FronteendFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FronteendFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
