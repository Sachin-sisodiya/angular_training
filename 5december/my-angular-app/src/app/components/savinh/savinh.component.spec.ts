import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavinhComponent } from './savinh.component';

describe('SavinhComponent', () => {
  let component: SavinhComponent;
  let fixture: ComponentFixture<SavinhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavinhComponent]
    });
    fixture = TestBed.createComponent(SavinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
