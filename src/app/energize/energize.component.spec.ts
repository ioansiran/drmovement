import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergizeComponent } from './energize.component';

describe('EnergizeComponent', () => {
  let component: EnergizeComponent;
  let fixture: ComponentFixture<EnergizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
