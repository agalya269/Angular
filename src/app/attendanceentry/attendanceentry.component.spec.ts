import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceentryComponent } from './attendanceentry.component';

describe('AttendanceentryComponent', () => {
  let component: AttendanceentryComponent;
  let fixture: ComponentFixture<AttendanceentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceentryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendanceentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
