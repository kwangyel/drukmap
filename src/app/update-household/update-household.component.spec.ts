import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHouseholdComponent } from './update-household.component';

describe('UpdateHouseholdComponent', () => {
  let component: UpdateHouseholdComponent;
  let fixture: ComponentFixture<UpdateHouseholdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHouseholdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHouseholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
