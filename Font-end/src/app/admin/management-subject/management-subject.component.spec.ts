import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementSubjectComponent } from './management-subject.component';

describe('ManagementSubjectComponent', () => {
  let component: ManagementSubjectComponent;
  let fixture: ComponentFixture<ManagementSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
