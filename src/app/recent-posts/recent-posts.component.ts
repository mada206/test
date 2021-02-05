import {Component, Input, OnInit} from '@angular/core';
import {News} from '../news';

@Component({
  selector: 'app-recent-posts',
  templateUrl: './recent-posts.component.html',
  styleUrls: ['./recent-posts.component.css']
})
export class RecentPostsComponent implements OnInit {
  @Input()   post: News | undefined ;

  constructor() { }

  ngOnInit(): void {
  }

}
