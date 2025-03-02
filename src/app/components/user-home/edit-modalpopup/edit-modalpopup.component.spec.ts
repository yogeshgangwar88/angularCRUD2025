import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModalpopupComponent } from './edit-modalpopup.component';

describe('EditModalpopupComponent', () => {
  let component: EditModalpopupComponent;
  let fixture: ComponentFixture<EditModalpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditModalpopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditModalpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
