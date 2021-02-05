import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewDetailsComponent} from './new-details/new-details.component';
import {NewsListComponent} from './news-list/news-list.component';

const routes: Routes = [
  {path: '' , component: NewsListComponent},
  {path: 'newdetails' , component: NewDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
