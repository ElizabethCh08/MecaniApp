import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicalworkshopComponent } from './mechanicalworkshop.component';

describe('MechanicalworkshopComponent', () => {
  let component: MechanicalworkshopComponent;
  let fixture: ComponentFixture<MechanicalworkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechanicalworkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicalworkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
