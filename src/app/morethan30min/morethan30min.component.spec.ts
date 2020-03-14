import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Morethan30minComponent } from './morethan30min.component';

describe('Morethan30minComponent', () => {
  let component: Morethan30minComponent;
  let fixture: ComponentFixture<Morethan30minComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Morethan30minComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Morethan30minComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
