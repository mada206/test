import { Component, OnInit , Input} from '@angular/core';
import {NewsListAPIService} from '../news-list-api.service';
import {News} from '../news';
@Component({
  selector: 'app-main-new',
  templateUrl: './main-new.component.html',
  styleUrls: ['./main-new.component.css']
})
export class MainNewComponent implements OnInit {
@Input() public   news: News [] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
