import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPizzaComponent } from './all-pizza.component';

describe('AllPizzaComponent', () => {
  let component: AllPizzaComponent;
  let fixture: ComponentFixture<AllPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
