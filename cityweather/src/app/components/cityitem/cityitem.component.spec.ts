import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityitemComponent } from './cityitem.component';

describe('CityitemComponent', () => {
  let component: CityitemComponent;
  let fixture: ComponentFixture<CityitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CityitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
