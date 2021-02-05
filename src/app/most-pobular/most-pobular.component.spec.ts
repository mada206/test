import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPobularComponent } from './most-pobular.component';

describe('MostPobularComponent', () => {
  let component: MostPobularComponent;
  let fixture: ComponentFixture<MostPobularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostPobularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPobularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
