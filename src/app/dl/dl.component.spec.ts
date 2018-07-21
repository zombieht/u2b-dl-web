import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlComponent } from './dl.component';

describe('DlComponent', () => {
  let component: DlComponent;
  let fixture: ComponentFixture<DlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
