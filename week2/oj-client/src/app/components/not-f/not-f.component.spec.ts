import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFComponent } from './not-f.component';

describe('NotFComponent', () => {
  let component: NotFComponent;
  let fixture: ComponentFixture<NotFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
