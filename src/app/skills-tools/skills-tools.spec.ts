import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTools } from './skills-tools';

describe('SkillsTools', () => {
  let component: SkillsTools;
  let fixture: ComponentFixture<SkillsTools>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsTools]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsTools);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
