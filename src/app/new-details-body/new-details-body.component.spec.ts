import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDetailsBodyComponent } from './new-details-body.component';

describe('NewDetailsBodyComponent', () => {
  let component: NewDetailsBodyComponent;
  let fixture: ComponentFixture<NewDetailsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDetailsBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDetailsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
