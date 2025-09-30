import { ComponentFixture, TestBed } from '@angular/core/testing';

import { headerComponent } from './header';

describe('Header', () => {
  let component: headerComponent;
  let fixture: ComponentFixture<headerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [headerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(headerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
