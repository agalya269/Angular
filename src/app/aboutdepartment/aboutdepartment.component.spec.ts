import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutdepartmentComponent } from './aboutdepartment.component';

describe('AboutdepartmentComponent', () => {
  let component: AboutdepartmentComponent;
  let fixture: ComponentFixture<AboutdepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutdepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
