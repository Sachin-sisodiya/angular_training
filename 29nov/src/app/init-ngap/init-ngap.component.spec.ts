import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitNgapComponent } from './init-ngap.component';

describe('InitNgapComponent', () => {
  let component: InitNgapComponent;
  let fixture: ComponentFixture<InitNgapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InitNgapComponent]
    });
    fixture = TestBed.createComponent(InitNgapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
