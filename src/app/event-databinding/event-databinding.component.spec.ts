import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDatabindingComponent } from './event-databinding.component';

describe('EventDatabindingComponent', () => {
  let component: EventDatabindingComponent;
  let fixture: ComponentFixture<EventDatabindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventDatabindingComponent]
    });
    fixture = TestBed.createComponent(EventDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
