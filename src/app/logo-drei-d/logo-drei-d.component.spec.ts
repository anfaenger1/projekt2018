import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDreiDComponent } from './logo-drei-d.component';

describe('LogoDreiDComponent', () => {
  let component: LogoDreiDComponent;
  let fixture: ComponentFixture<LogoDreiDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoDreiDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoDreiDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
