import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoopProgram } from './coop-program';

describe('CoopProgram', () => {
  let component: CoopProgram;
  let fixture: ComponentFixture<CoopProgram>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoopProgram]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoopProgram);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
