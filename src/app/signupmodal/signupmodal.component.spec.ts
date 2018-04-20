import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninmodalComponent } from './signupmodal.component';

describe('SignupmodalComponent', () => {
  let component: SigninmodalComponent;
  let fixture: ComponentFixture<SigninmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
