import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentstaffComponent } from './departmentstaff.component';

describe('DepartmentstaffComponent', () => {
  let component: DepartmentstaffComponent;
  let fixture: ComponentFixture<DepartmentstaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentstaffComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentstaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
