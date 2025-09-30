import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoFoodCorporation } from './go-food-corporation';

describe('GoFoodCorporation', () => {
  let component: GoFoodCorporation;
  let fixture: ComponentFixture<GoFoodCorporation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoFoodCorporation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoFoodCorporation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
