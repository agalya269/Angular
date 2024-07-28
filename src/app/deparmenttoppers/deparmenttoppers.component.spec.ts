import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparmenttoppersComponent } from './deparmenttoppers.component';

describe('DeparmenttoppersComponent', () => {
  let component: DeparmenttoppersComponent;
  let fixture: ComponentFixture<DeparmenttoppersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeparmenttoppersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeparmenttoppersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
