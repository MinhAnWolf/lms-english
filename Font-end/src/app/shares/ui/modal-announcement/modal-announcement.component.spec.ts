import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAnnouncementComponent } from './modal-announcement.component';

describe('ModalAnnouncementComponent', () => {
  let component: ModalAnnouncementComponent;
  let fixture: ComponentFixture<ModalAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAnnouncementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
