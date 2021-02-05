import {Component, Input, OnInit} from '@angular/core';
import {News} from '../news';

@Component({
  selector: 'app-editor-picker',
  templateUrl: './editor-picker.component.html',
  styleUrls: ['./editor-picker.component.css']
})
export class EditorPickerComponent implements OnInit {
  @Input()   editorPicker: News | undefined ;
  constructor() { }

  ngOnInit(): void {
  }

}
