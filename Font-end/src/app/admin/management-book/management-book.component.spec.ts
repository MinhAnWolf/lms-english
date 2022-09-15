import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementBookComponent } from './management-book.component';

describe('ManagementBookComponent', () => {
  let component: ManagementBookComponent;
  let fixture: ComponentFixture<ManagementBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
