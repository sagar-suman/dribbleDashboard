import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoColumnComponent } from './to-do-column.component';

describe('ToDoColumnComponent', () => {
  let component: ToDoColumnComponent;
  let fixture: ComponentFixture<ToDoColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
