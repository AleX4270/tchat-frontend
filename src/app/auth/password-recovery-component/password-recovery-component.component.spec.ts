import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRecoveryComponentComponent } from './password-recovery-component.component';

describe('PasswordRecoveryComponentComponent', () => {
  let component: PasswordRecoveryComponentComponent;
  let fixture: ComponentFixture<PasswordRecoveryComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordRecoveryComponentComponent]
    });
    fixture = TestBed.createComponent(PasswordRecoveryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
