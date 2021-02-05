import {Component, Input, OnInit} from '@angular/core';
import {News} from '../news';

@Component({
  selector: 'app-secondary-news',
  templateUrl: './secondary-news.component.html',
  styleUrls: ['./secondary-news.component.css']
})
export class SecondaryNewsComponent implements OnInit {
  @Input()    secNews: News | undefined ;
  constructor() { }

  ngOnInit(): void {
  }

}
