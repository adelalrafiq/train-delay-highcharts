import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { C16C30minComponent } from './c16-c30min.component';

describe('C16C30minComponent', () => {
  let component: C16C30minComponent;
  let fixture: ComponentFixture<C16C30minComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ C16C30minComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C16C30minComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
