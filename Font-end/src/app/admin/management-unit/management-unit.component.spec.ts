import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementUnitComponent } from './management-unit.component';

describe('ManagementUnitComponent', () => {
  let component: ManagementUnitComponent;
  let fixture: ComponentFixture<ManagementUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
