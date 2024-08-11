import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CallapiComponent } from './callapi.component';

describe('CallapiComponent', () => {
  let component: CallapiComponent;
  let fixture: ComponentFixture<CallapiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CallapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
