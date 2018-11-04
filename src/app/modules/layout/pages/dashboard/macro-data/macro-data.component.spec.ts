import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroDataComponent } from './macro-data.component';

describe('MacroDataComponent', () => {
  let component: MacroDataComponent;
  let fixture: ComponentFixture<MacroDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacroDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacroDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
