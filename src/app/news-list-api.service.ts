import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { News } from './news';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsListAPIService {
  private URL = 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4';
  constructor(private http: HttpClient) { }

 public getNews(): Observable<News[]>
  {
    return this.http
      .get(this.URL)
      .pipe(map((data: any) => data.articles as News[]));
  }

}
