import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonsListComponent } from './lessons-list-component';

describe('LessonsListComponent', () => {
  let component: LessonsListComponent;
  let fixture: ComponentFixture<LessonsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LessonsListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
