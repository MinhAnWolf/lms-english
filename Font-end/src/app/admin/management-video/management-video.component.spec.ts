import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementVideoComponent } from './management-video.component';

describe('ManagementVideoComponent', () => {
  let component: ManagementVideoComponent;
  let fixture: ComponentFixture<ManagementVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
