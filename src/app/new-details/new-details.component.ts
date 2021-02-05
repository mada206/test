import { Component, OnInit } from '@angular/core';
import {Comment} from '../comment';
@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.css']
})
export class NewDetailsComponent implements OnInit {
  constructor() { }
  comment = new Comment();
  ngOnInit(): void {
  }

}
