import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FronteendHeaderComponent } from './fronteend-header.component';

describe('FronteendHeaderComponent', () => {
  let component: FronteendHeaderComponent;
  let fixture: ComponentFixture<FronteendHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FronteendHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FronteendHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
