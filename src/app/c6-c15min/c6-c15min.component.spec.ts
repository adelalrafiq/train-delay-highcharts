import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C6C15minComponent } from './c6-c15min.component';

describe('C6C15minComponent', () => {
  let component: C6C15minComponent;
  let fixture: ComponentFixture<C6C15minComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C6C15minComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C6C15minComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
