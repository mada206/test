import {Component, OnInit} from '@angular/core';
import {NewsListAPIService} from '../news-list-api.service';
import {News} from '../news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  public news: News [] = [];
  public news1: News [] = [];
  public news2: News [] = [];
  public news3: News [] = [];
  public news4: News [] = [];

  constructor(private newsService: NewsListAPIService) {
  }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(news => {
      this.news = news;
      this.news1 = this.news.filter((value, index) => {
       return  index = 1;
      });
      this.news2 = this.news.filter((value, index) => {
        return  index >= 2 && index < 4;
      });
      this.news3 = this.news.filter((value, index) => {
        return  index >= 4 && index < 7;
      });
      this.news4 = this.news.filter((value, index) => {
        return  index >= 7 && index < 10;
      });
    });
  }

}
