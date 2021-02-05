import {Component, Input, OnInit} from '@angular/core';
import {News} from '../news';

@Component({
  selector: 'app-most-pobular',
  templateUrl: './most-pobular.component.html',
  styleUrls: ['./most-pobular.component.css']
})
export class MostPobularComponent implements OnInit {
  @Input()   pobularPost: News | undefined ;
  constructor() { }

  ngOnInit(): void {
  }

}
