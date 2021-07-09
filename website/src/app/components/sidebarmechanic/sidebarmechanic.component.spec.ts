import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarmechanicComponent } from './sidebarmechanic.component';

describe('SidebarmechanicComponent', () => {
  let component: SidebarmechanicComponent;
  let fixture: ComponentFixture<SidebarmechanicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarmechanicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarmechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
