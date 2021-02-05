import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsListComponent } from './news-list/news-list.component';
import { HttpClientModule } from '@angular/common/http';
import {NewsListAPIService} from './news-list-api.service';
import { MainNewComponent } from './main-new/main-new.component';
import { SecondaryNewsComponent } from './secondary-news/secondary-news.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { MostPobularComponent } from './most-pobular/most-pobular.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { NewDetailsComponent } from './new-details/new-details.component';
import {FormsModule} from '@angular/forms';
import { NewDetailsBodyComponent } from './new-details-body/new-details-body.component';
import { CommentComponent } from './comment/comment.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { EditorPickerComponent } from './editor-picker/editor-picker.component';
import { SubscribeFormComponent } from './subscribe-form/subscribe-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsListComponent,
    MainNewComponent,
    SecondaryNewsComponent,
    RecentPostsComponent,
    MostPobularComponent,
    SocialmediaComponent,
    NewDetailsComponent,
    NewDetailsBodyComponent,
    CommentComponent,
    CommentFormComponent,
    EditorPickerComponent,
    SubscribeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewsListAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
