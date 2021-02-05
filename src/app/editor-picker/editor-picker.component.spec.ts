import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPickerComponent } from './editor-picker.component';

describe('EditorPickerComponent', () => {
  let component: EditorPickerComponent;
  let fixture: ComponentFixture<EditorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
