import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C1C5minComponent } from './c1-c5min.component';

describe('C1C5minComponent', () => {
  let component: C1C5minComponent;
  let fixture: ComponentFixture<C1C5minComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C1C5minComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C1C5minComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
