import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentContactSelectComponent } from './payment-contact-select.component';

describe('PaymentContactSelectComponent', () => {
  let component: PaymentContactSelectComponent;
  let fixture: ComponentFixture<PaymentContactSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentContactSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentContactSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
