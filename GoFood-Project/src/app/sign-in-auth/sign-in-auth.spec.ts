import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInAuthComponent } from './sign-in-auth';

describe('SignInAuth', () => {
  let component: SignInAuthComponent;
  let fixture: ComponentFixture<SignInAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
