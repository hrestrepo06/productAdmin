import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FortgotPasswordPage } from './fortgot-password.page';

describe('FortgotPasswordPage', () => {
  let component: FortgotPasswordPage;
  let fixture: ComponentFixture<FortgotPasswordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FortgotPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
