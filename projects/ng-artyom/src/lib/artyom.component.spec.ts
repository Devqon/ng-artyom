import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtyomComponent } from './artyom.component';

describe('NgArtyomComponent', () => {
  let component: ArtyomComponent;
  let fixture: ComponentFixture<ArtyomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtyomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtyomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
