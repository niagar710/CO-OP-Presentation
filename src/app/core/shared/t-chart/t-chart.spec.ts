import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TChart } from './t-chart';

describe('TChart', () => {
  let component: TChart;
  let fixture: ComponentFixture<TChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
