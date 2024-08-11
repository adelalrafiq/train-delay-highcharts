import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { C0minComponent } from './c0min.component';

describe('C0minComponent', () => {
  let component: C0minComponent;
  let fixture: ComponentFixture<C0minComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ C0minComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C0minComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
