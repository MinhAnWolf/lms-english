import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementModalUserComponent } from './management-modal-user.component';

describe('ManagementModalUserComponent', () => {
  let component: ManagementModalUserComponent;
  let fixture: ComponentFixture<ManagementModalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementModalUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementModalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
