import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusPageComponent } from './bus-page.component';

describe('BusPageComponent', () => {
  let component: BusPageComponent;
  let fixture: ComponentFixture<BusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
